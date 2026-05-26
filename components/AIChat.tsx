"use client"

import { useState, useRef, useEffect } from "react"
import { X, Send, Bot, User, ChevronDown } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

export default function AIChat() {
    const [isOpen, setIsOpen] = useState(false)
    const [question, setQuestion] = useState("")
    const [model, setModel] = useState<"inbuild" | "llama">("inbuild")
    const [isModelDropdownOpen, setIsModelDropdownOpen] = useState(false)
    const [messages, setMessages] = useState<{ role: "user" | "assistant", content: string, time: string }[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsModelDropdownOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages, isLoading])

    async function ask(e?: React.FormEvent) {
        if (e) e.preventDefault()
        if (!question.trim()) return

        const userMsg = question
        const newMessage = { role: "user" as const, content: userMsg, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
        setMessages(prev => [...prev, newMessage])
        setQuestion("")
        setIsLoading(true)

        try {
            const endpoint = model === "llama" ? "/api/chat/llama" : "/api/chat"
            const res = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userMsg })
            })

            const data = await res.json()
            setMessages(prev => [...prev, { role: "assistant", content: data.answer, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }])
        } catch (error) {
            console.error(error)
            setMessages(prev => [...prev, { role: "assistant", content: "Sorry, I encountered an error communicating with the server.", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }])
        } finally {
            setIsLoading(false)
        }
    }

    // Custom formatting for message text to handle basic lists, newlines, and bolding
    const FormattedMessage = ({ content }: { content: string }) => {
        const parts = content.split(/(\*\*.*?\*\*)/g);

        return (
            <div className="whitespace-pre-wrap">
                {parts.map((part, index) => {
                    if (part.startsWith('**') && part.endsWith('**') && part.length >= 4) {
                        return <strong key={index} className="font-bold text-slate-900 dark:text-white">{part.slice(2, -2)}</strong>;
                    }
                    return <span key={index}>{part}</span>;
                })}
            </div>
        )
    }

    return (
        <>
            {/* The floating button */}
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: isOpen ? 0 : 1 }}
                onClick={() => setIsOpen(true)}
                className="group fixed bottom-6 right-6 p-4 bg-blue-600 text-white rounded-full shadow-2xl hover:bg-blue-700 transition-all duration-300 z-50 flex items-center justify-center hover:shadow-blue-500/50 hover:scale-110"
            >
                <Bot size={28} className="group-hover:rotate-12 transition-transform duration-300" />

                {/* Tooltip */}
                <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-slate-900 border border-slate-800 text-slate-200 text-sm font-medium px-4 py-2 rounded-xl shadow-2xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-x-4 group-hover:translate-x-0 hidden sm:block after:content-[''] after:absolute after:left-full after:top-1/2 after:-translate-y-1/2 after:border-[6px] after:border-transparent after:border-l-slate-800">
                    Talk to Shijin&nbsp;personal&nbsp;AI
                </div>
            </motion.button>

            {/* The Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6"
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 20, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-white dark:bg-[#0f172a] rounded-2xl w-full max-w-3xl shadow-2xl overflow-hidden flex flex-col h-[700px] max-h-[85vh] border border-slate-200 dark:border-slate-800"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="p-4 border-b border-slate-100 dark:border-slate-800/60 flex justify-between items-center bg-slate-50/50 dark:bg-[#0f172a]">
                                <h3 className="font-semibold text-lg flex items-center gap-2 text-slate-800 dark:text-slate-100">
                                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                                        <Bot className="text-blue-600 dark:text-blue-400" size={20} />
                                    </div>
                                    AI Assistant
                                </h3>
                                <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Chat History */}
                            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-8 bg-[#f8fafc] dark:bg-[#0b1120]">
                                {messages.length === 0 && (
                                    <div className="text-center text-slate-500 mt-20 flex flex-col items-center">
                                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 text-blue-500 rounded-2xl flex items-center justify-center mb-3 rotate-12">
                                            <Bot size={24} />
                                        </div>
                                        <h4 className="text-base font-medium text-slate-700 dark:text-slate-300 mb-1">How can I help you?</h4>
                                        <p className="text-xs max-w-sm mx-auto">Ask me anything about Shijin&nbsp;s portfolio, experience, skills, or projects.</p>
                                    </div>
                                )}

                                {messages.map((msg, idx) => (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        key={idx}
                                        className="flex gap-3 sm:gap-4"
                                    >
                                        <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300' : 'bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400'}`}>
                                            {msg.role === 'user' ? <><User size={16} className="sm:hidden" /><User size={18} className="hidden sm:block" /></> : <><Bot size={16} className="sm:hidden" /><Bot size={18} className="hidden sm:block" /></>}
                                        </div>
                                        <div className="flex-1 space-y-1">
                                            <div className="flex items-baseline gap-2">
                                                <span className="font-semibold text-sm sm:text-[15px] text-slate-900 dark:text-slate-100">{msg.role === 'user' ? 'You' : 'AI Assistant'}</span>
                                                <span className="text-[10px] sm:text-xs text-slate-400 font-medium">{msg.time}</span>
                                            </div>
                                            <div className={`text-sm sm:text-[15px] leading-relaxed ${msg.role === 'user' ? 'text-slate-700 dark:text-slate-300' : 'text-slate-800 dark:text-slate-200'} `}>
                                                <FormattedMessage content={msg.content} />
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                                {isLoading && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="flex gap-3 sm:gap-4"
                                    >
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400 flex items-center justify-center shrink-0">
                                            <><Bot size={16} className="sm:hidden" /><Bot size={18} className="hidden sm:block" /></>
                                        </div>
                                        <div className="flex-1 space-y-1">
                                            <div className="flex items-baseline gap-2">
                                                <span className="font-semibold text-sm sm:text-[15px] text-slate-900 dark:text-slate-100">AI Assistant</span>
                                            </div>
                                            <div className="text-sm sm:text-[15px] text-slate-500 flex items-center gap-1.5 h-6">
                                                <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                                                <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                                                <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>

                            {/* Input Area */}
                            <div className="p-3 sm:p-4 border-t border-slate-100 dark:border-slate-800/60 bg-white dark:bg-[#0f172a]">
                                <form onSubmit={ask} className="flex flex-col sm:flex-row relative bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-slate-700 rounded-xl focus-within:ring-2 focus-within:ring-blue-500 transition-shadow">
                                    <div className="order-2 sm:order-1 flex justify-between items-center border-t sm:border-t-0 sm:border-r border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/40 sm:hover:bg-slate-100 sm:dark:hover:bg-slate-800 transition-colors sm:rounded-l-xl rounded-b-xl sm:rounded-br-none w-full sm:w-[130px] shrink-0 p-1 sm:p-0">
                                        <div ref={dropdownRef} className="relative flex-1 sm:h-full group">
                                            <button
                                                type="button"
                                                onClick={() => setIsModelDropdownOpen(!isModelDropdownOpen)}
                                                className="appearance-none bg-transparent text-xs py-2 sm:py-3 pl-3 pr-8 focus:outline-none text-slate-700 dark:text-slate-300 font-medium cursor-pointer w-full h-full text-left truncate relative rounded-lg group-hover:bg-slate-200/50 dark:group-hover:bg-slate-700/50 sm:group-hover:bg-transparent transition-colors"
                                                disabled={isLoading}
                                            >
                                                {model === "inbuild" ? "In Build" : "Llama"}
                                                <ChevronDown size={14} className={`absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none transition-transform ${isModelDropdownOpen ? 'rotate-180' : ''}`} />
                                            </button>

                                            <AnimatePresence>
                                                {isModelDropdownOpen && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                        transition={{ duration: 0.15 }}
                                                        className="absolute bottom-full left-0 mb-2 w-48 bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl overflow-hidden z-50 p-1.5"
                                                    >
                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                if (model !== "inbuild") {
                                                                    setModel("inbuild");
                                                                    if (messages.length > 0) setMessages([]);
                                                                }
                                                                setIsModelDropdownOpen(false);
                                                            }}
                                                            className={`w-full text-left px-3 py-2 text-xs font-medium rounded-lg transition-colors flex items-center justify-between ${model === "inbuild" ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50'}`}
                                                        >
                                                            In Build
                                                        </button>
                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                if (model !== "llama") {
                                                                    setModel("llama");
                                                                    if (messages.length > 0) setMessages([]);
                                                                }
                                                                setIsModelDropdownOpen(false);
                                                            }}
                                                            className={`w-full text-left px-3 py-2 text-xs font-medium rounded-lg transition-colors flex flex-col gap-0.5 mt-1 ${model === "llama" ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50'}`}
                                                        >
                                                            <span>Llama</span>
                                                            <span className={`text-[10px] ${model === "llama" ? "text-blue-500/80 dark:text-blue-400/80" : "text-slate-500"} font-normal`}>llama-3.3-70b-versatile</span>
                                                        </button>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isLoading || !question.trim()}
                                            className="sm:hidden w-8 h-8 mr-1 bg-blue-600 text-white rounded-lg flex items-center justify-center disabled:opacity-50 disabled:bg-slate-300 dark:disabled:bg-slate-700 hover:bg-blue-700 transition-colors shrink-0"
                                        >
                                            <Send size={14} className="ml-0.5" />
                                        </button>
                                    </div>
                                    <input
                                        type="text"
                                        value={question}
                                        onChange={(e) => setQuestion(e.target.value)}
                                        placeholder="Message AI..."
                                        className="order-1 sm:order-2 flex-1 w-full bg-transparent py-3 px-3 sm:pr-14 focus:outline-none text-sm dark:text-white"
                                        disabled={isLoading}
                                    />
                                    <button
                                        type="submit"
                                        disabled={isLoading || !question.trim()}
                                        className="hidden sm:flex absolute right-1.5 top-1.5 bottom-1.5 w-10 bg-blue-600 text-white rounded-lg items-center justify-center disabled:opacity-50 disabled:bg-slate-300 dark:disabled:bg-slate-700 hover:bg-blue-700 transition-colors shrink-0"
                                    >
                                        <Send size={16} className="ml-0.5" />
                                    </button>
                                </form>
                                <div className="text-center mt-3 text-xs text-slate-400 font-medium">
                                    AI-generated content may be inaccurate
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}