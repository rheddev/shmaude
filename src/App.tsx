import { useState, useEffect, useRef } from 'react'
import './App.css'
import { 
  Plus, 
  ChevronUp, 
  Sun, 
  Moon, 
  MessageSquare, 
  Search, 
  Share, 
  Settings, 
  Copy, 
  ThumbsUp, 
  ThumbsDown, 
  RefreshCw,
  Paperclip
} from 'lucide-react'

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'assistant';
  thinking?: string;
  timestamp: Date;
}

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Apply dark mode class to body and handle local storage
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      setDarkMode(true);
    }
    
    if (darkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);
  
  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  // Auto-resize textarea as user types
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [inputValue]);

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    
    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages([...messages, userMessage]);
    setInputValue('');
    
    // Reset textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
    
    // Create Shmaude's response with typing indicator
    const typingMessage: Message = {
      id: Date.now() + 1,
      text: '...',
      sender: 'assistant',
      thinking: 'Crafting the perfect response...',
      timestamp: new Date()
    };
    
    setMessages(prevMessages => [...prevMessages, typingMessage]);
    
    // Simulate AI thinking and then respond
    setTimeout(() => {
      const assistantMessage: Message = {
        id: Date.now() + 2,
        text: `You said: "${userMessage.text}"`,
        sender: 'assistant',
        thinking: 'Analyzed input and formulated response.',
        timestamp: new Date()
      };
      
      setMessages(prevMessages => 
        prevMessages.map(msg => 
          msg.id === typingMessage.id ? assistantMessage : msg
        )
      );
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className={`app-container ${darkMode ? 'dark' : 'light'}`}>
      <div className="glass-overlay"></div>
      
      <aside className="sidebar">
        <div className="sidebar-brand">
          <span className="logo">S</span>
          <h1>Shmaude</h1>
        </div>
        
        <button className="new-chat-btn">
          <Plus size={18} className="btn-icon" />
          <span>New conversation</span>
        </button>
        
        <nav className="sidebar-nav">
          <div className="nav-section">
            <h2>Recent Chats</h2>
            <div className="chat-list">
              <div className="chat-item active">
                <MessageSquare size={18} className="chat-icon" />
                <span className="chat-title">Current Chat</span>
              </div>
              <div className="chat-item">
                <Search size={18} className="chat-icon" />
                <span className="chat-title">Research Assistant</span>
              </div>
            </div>
          </div>
        </nav>
        
        <div className="sidebar-footer">
          <div className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
            <div className="toggle-track">
              <div className="toggle-thumb"></div>
              <span className="toggle-icon">
                {darkMode ? <Moon size={14} /> : <Sun size={14} />}
              </span>
            </div>
            <span>Dark Mode</span>
          </div>
          
          <div className="user-profile">
            <div className="avatar">RT</div>
            <div className="user-info">
              <div className="user-name">Rhamsez Thevenin</div>
              <div className="user-plan">Premium</div>
            </div>
          </div>
        </div>
      </aside>
      
      <main className="main-content">
        <header className="content-header">
          <div className="current-chat">
            <h2>Current Chat</h2>
            <span className="chat-status">Active</span>
          </div>
          <div className="header-actions">
            <button className="action-btn" aria-label="Share">
              <Share size={16} className="btn-icon" />
              <span>Share</span>
            </button>
            <button className="action-btn" aria-label="Settings">
              <Settings size={16} className="btn-icon" />
            </button>
          </div>
        </header>
        
        <div className="messages-container">
          {messages.length === 0 ? (
            <div className="welcome-message">
              <div className="welcome-icon">S</div>
              <h2>Welcome to Shmaude</h2>
              <p>Your AI assistant with refined design.</p>
              <p>How may I assist you today?</p>
            </div>
          ) : (
            <div className="message-list">
              {messages.map(message => (
                <div key={message.id} className="message-wrapper">
                  <div className={`message ${message.sender}`}>
                    <div className="message-header">
                      <div className="message-avatar">
                        {message.sender === 'assistant' ? 'S' : 'RT'}
                      </div>
                      <div className="message-meta">
                        <div className="message-sender">
                          {message.sender === 'assistant' ? 'Shmaude' : 'You'}
                        </div>
                        <div className="message-time">{formatTime(message.timestamp)}</div>
                      </div>
                      {message.thinking && message.sender === 'assistant' && (
                        <div className="message-thinking">
                          {message.thinking}
                        </div>
                      )}
                    </div>
                    
                    <div className="message-content">
                      {message.text === '...' ? (
                        <div className="typing-indicator">
                          <span></span><span></span><span></span>
                        </div>
                      ) : (
                        message.text
                      )}
                    </div>
                    
                    {message.sender === 'assistant' && message.text !== '...' && (
                      <div className="message-actions">
                        <button className="message-action" aria-label="Copy">
                          <Copy size={16} className="action-icon" />
                        </button>
                        <button className="message-action" aria-label="Like">
                          <ThumbsUp size={16} className="action-icon" />
                        </button>
                        <button className="message-action" aria-label="Dislike">
                          <ThumbsDown size={16} className="action-icon" />
                        </button>
                        <button className="message-action text-action" aria-label="Regenerate">
                          <RefreshCw size={16} className="action-icon" />
                          <span>Regenerate</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>
        
        <div className="input-area">
          <div className="input-container">
            <textarea
              ref={textareaRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Message Shmaude..."
              rows={1}
            />
            <div className="input-actions">
              <button className="format-btn" aria-label="Add attachment">
                <Paperclip size={18} className="btn-icon" />
              </button>
              <button 
                className={`send-btn ${inputValue.trim() === '' ? 'disabled' : ''}`}
                onClick={handleSendMessage}
                disabled={inputValue.trim() === ''}
              >
                <ChevronUp size={18} className="btn-icon" />
              </button>
            </div>
          </div>
          <div className="input-footer">
            <div className="model-info">
              <span className="model-badge">AI</span>
              <span>Shmaude Sonnet 4</span>
            </div>
            <div className="input-disclaimer">
              Shmaude may produce inaccurate information. Verify important content.
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
