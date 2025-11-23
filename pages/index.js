import { useState, useEffect, useRef } from 'react';

// Seed Data - 50 Situations
const seedSubmissions = [
  { id: 1, text: "He asked me to split the bill on our first date", category: "Dating/Relationships", votes: { red: 245, green: 432 } },
  { id: 2, text: "She still talks to her ex every day", category: "Dating/Relationships", votes: { red: 567, green: 123 } },
  { id: 3, text: "My boss texts me after 10pm about work", category: "Work/Boss", votes: { red: 789, green: 45 } },
  { id: 4, text: "He remembered my coffee order after the first date", category: "Dating/Relationships", votes: { red: 23, green: 890 } },
  { id: 5, text: "My roommate uses my stuff without asking", category: "Roommate", votes: { red: 678, green: 89 } },
  { id: 6, text: "She canceled our plans last minute for the third time", category: "Friendship", votes: { red: 812, green: 34 } },
  { id: 7, text: "He introduces me to his family after 2 weeks", category: "Dating/Relationships", votes: { red: 456, green: 234 } },
  { id: 8, text: "My friend borrowed 50€ and hasn't mentioned it in 3 months", category: "Friendship", votes: { red: 723, green: 45 } },
  { id: 9, text: "She checks my phone when I'm in the shower", category: "Dating/Relationships", votes: { red: 945, green: 12 } },
  { id: 10, text: "He surprised me with flowers at work", category: "Dating/Relationships", votes: { red: 34, green: 876 } },
  { id: 11, text: "My landlord enters without 24h notice", category: "Other", votes: { red: 891, green: 23 } },
  { id: 12, text: "She always pays for dinner without making a big deal", category: "Dating/Relationships", votes: { red: 45, green: 765 } },
  { id: 13, text: "He follows 500+ Instagram models", category: "Dating/Relationships", votes: { red: 634, green: 234 } },
  { id: 14, text: "My professor asked me out for coffee", category: "School/Uni", votes: { red: 823, green: 89 } },
  { id: 15, text: "She respects when I need alone time", category: "Dating/Relationships", votes: { red: 12, green: 923 } },
  { id: 16, text: "He said 'I love you' on the second date", category: "Dating/Relationships", votes: { red: 678, green: 145 } },
  { id: 17, text: "My friend only texts when they need something", category: "Friendship", votes: { red: 789, green: 67 } },
  { id: 18, text: "She communicates clearly instead of playing games", category: "Dating/Relationships", votes: { red: 23, green: 891 } },
  { id: 19, text: "He gets jealous when I hang out with guy friends", category: "Dating/Relationships", votes: { red: 867, green: 78 } },
  { id: 20, text: "My boss takes credit for my ideas in meetings", category: "Work/Boss", votes: { red: 934, green: 23 } },
  { id: 21, text: "She apologizes when she's wrong", category: "Dating/Relationships", votes: { red: 34, green: 823 } },
  { id: 22, text: "He told me he's 'not ready for labels' after 6 months", category: "Dating/Relationships", votes: { red: 812, green: 89 } },
  { id: 23, text: "My roommate's partner is here 6 days a week", category: "Roommate", votes: { red: 723, green: 156 } },
  { id: 24, text: "She encouraged me to pursue my dream job", category: "Dating/Relationships", votes: { red: 12, green: 878 } },
  { id: 25, text: "He comments 'fire' emojis on other girls' bikini pics", category: "Dating/Relationships", votes: { red: 734, green: 123 } },
  { id: 26, text: "My friend shared my secret with others", category: "Friendship", votes: { red: 891, green: 34 } },
  { id: 27, text: "She respects my boundaries without me having to explain twice", category: "Dating/Relationships", votes: { red: 23, green: 834 } },
  { id: 28, text: "He wants to move in together after one month", category: "Dating/Relationships", votes: { red: 789, green: 123 } },
  { id: 29, text: "My mom guilt-trips me when I can't visit", category: "Family", votes: { red: 634, green: 234 } },
  { id: 30, text: "She makes an effort with my friends and family", category: "Dating/Relationships", votes: { red: 45, green: 789 } },
  { id: 31, text: "He refuses to talk about our future plans", category: "Dating/Relationships", votes: { red: 723, green: 167 } },
  { id: 32, text: "My friend always cancels but gets mad when I do", category: "Friendship", votes: { red: 856, green: 67 } },
  { id: 33, text: "She celebrates my wins without jealousy", category: "Dating/Relationships", votes: { red: 23, green: 912 } },
  { id: 34, text: "He calls his ex 'crazy' and 'psycho'", category: "Dating/Relationships", votes: { red: 891, green: 45 } },
  { id: 35, text: "My landlord is charging me for normal wear and tear", category: "Other", votes: { red: 767, green: 123 } },
  { id: 36, text: "She admits when she doesn't know something", category: "Dating/Relationships", votes: { red: 34, green: 823 } },
  { id: 37, text: "He makes plans and actually follows through", category: "Dating/Relationships", votes: { red: 45, green: 834 } },
  { id: 38, text: "My boss asked me to work for free 'for experience'", category: "Work/Boss", votes: { red: 923, green: 23 } },
  { id: 39, text: "She pressures me to post us on social media", category: "Dating/Relationships", votes: { red: 678, green: 189 } },
  { id: 40, text: "He listens without trying to immediately fix everything", category: "Dating/Relationships", votes: { red: 34, green: 867 } },
  { id: 41, text: "My friend only invites me to things when their first choice cancels", category: "Friendship", votes: { red: 789, green: 89 } },
  { id: 42, text: "She keeps track of everything I owe her", category: "Dating/Relationships", votes: { red: 723, green: 178 } },
  { id: 43, text: "He treats service staff with respect", category: "Dating/Relationships", votes: { red: 12, green: 934 } },
  { id: 44, text: "My roommate never cleans but complains when I don't", category: "Roommate", votes: { red: 845, green: 67 } },
  { id: 45, text: "She asks about my day and actually listens", category: "Dating/Relationships", votes: { red: 23, green: 876 } },
  { id: 46, text: "He said 'you're not like other girls'", category: "Dating/Relationships", votes: { red: 734, green: 234 } },
  { id: 47, text: "My friend hypes me up to others when I'm not there", category: "Friendship", votes: { red: 34, green: 891 } },
  { id: 48, text: "She gets angry when I don't text back within 5 minutes", category: "Dating/Relationships", votes: { red: 867, green: 78 } },
  { id: 49, text: "He supports my hobbies even if he doesn't get them", category: "Dating/Relationships", votes: { red: 23, green: 823 } },
  { id: 50, text: "My landlord refused to fix the broken heater for 2 weeks", category: "Other", votes: { red: 912, green: 34 } }
];

const categories = [
  "All",
  "Dating/Relationships",
  "Friendship",
  "Work/Boss",
  "Family",
  "Roommate",
  "Money",
  "School/Uni",
  "Other"
];

export default function Home() {
  const [view, setView] = useState('feed');
  const [submissions, setSubmissions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [votedSubmissions, setVotedSubmissions] = useState(new Set());
  const [userVotes, setUserVotes] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [currentResults, setCurrentResults] = useState(null);
  const [userSubmissions, setUserSubmissions] = useState([]);
  const [isPremium, setIsPremium] = useState(false);
  const [dailyVotes, setDailyVotes] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [voteHistory, setVoteHistory] = useState([]);
  const [favorites, setFavorites] = useState(new Set());
  const [votingStreak, setVotingStreak] = useState(0);
  const [lastVoteDate, setLastVoteDate] = useState(null);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [cardAnimation, setCardAnimation] = useState('');

  const cardRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const [newSubmission, setNewSubmission] = useState({
    text: '',
    category: 'Dating/Relationships'
  });

  // LocalStorage persistence
  useEffect(() => {
    const loadFromStorage = () => {
      try {
        const storedVotes = localStorage.getItem('userVotes');
        const storedFavorites = localStorage.getItem('favorites');
        const storedSubmissions = localStorage.getItem('userSubmissions');
        const storedStreak = localStorage.getItem('votingStreak');
        const storedLastDate = localStorage.getItem('lastVoteDate');
        const storedDailyVotes = localStorage.getItem('dailyVotes');
        const storedPremium = localStorage.getItem('isPremium');
        const storedSound = localStorage.getItem('soundEnabled');

        if (storedVotes) setUserVotes(JSON.parse(storedVotes));
        if (storedFavorites) setFavorites(new Set(JSON.parse(storedFavorites)));
        if (storedSubmissions) setUserSubmissions(JSON.parse(storedSubmissions));
        if (storedStreak) setVotingStreak(parseInt(storedStreak));
        if (storedLastDate) setLastVoteDate(storedLastDate);
        if (storedPremium) setIsPremium(JSON.parse(storedPremium));
        if (storedSound) setSoundEnabled(JSON.parse(storedSound));

        // Reset daily votes if new day
        const today = new Date().toDateString();
        const lastDate = storedLastDate || '';
        if (today !== lastDate) {
          setDailyVotes(0);
          localStorage.setItem('dailyVotes', '0');
        } else if (storedDailyVotes) {
          setDailyVotes(parseInt(storedDailyVotes));
        }
      } catch (error) {
        console.error('Error loading from localStorage:', error);
      }
    };

    loadFromStorage();
  }, []);

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('userVotes', JSON.stringify(userVotes));
      localStorage.setItem('favorites', JSON.stringify([...favorites]));
      localStorage.setItem('userSubmissions', JSON.stringify(userSubmissions));
      localStorage.setItem('votingStreak', votingStreak.toString());
      localStorage.setItem('dailyVotes', dailyVotes.toString());
      localStorage.setItem('isPremium', JSON.stringify(isPremium));
      localStorage.setItem('soundEnabled', JSON.stringify(soundEnabled));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }, [userVotes, favorites, userSubmissions, votingStreak, dailyVotes, isPremium, soundEnabled]);

  // Initialize submissions
  useEffect(() => {
    const shuffled = [...seedSubmissions].sort(() => Math.random() - 0.5);
    setSubmissions(shuffled);
  }, []);

  // Swipe functionality
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      touchEndX.current = e.touches[0].clientX;
      const diff = touchEndX.current - touchStartX.current;
      card.style.transform = `translateX(${diff}px) rotate(${diff / 20}deg)`;
    };

    const handleTouchEnd = () => {
      const diff = touchEndX.current - touchStartX.current;

      if (diff > 100) {
        // Swipe right = Green Flag
        card.style.transform = 'translateX(500px) rotate(20deg)';
        setTimeout(() => {
          handleVote('green');
          card.style.transform = '';
        }, 300);
      } else if (diff < -100) {
        // Swipe left = Red Flag
        card.style.transform = 'translateX(-500px) rotate(-20deg)';
        setTimeout(() => {
          handleVote('red');
          card.style.transform = '';
        }, 300);
      } else {
        card.style.transform = '';
      }
    };

    card.addEventListener('touchstart', handleTouchStart);
    card.addEventListener('touchmove', handleTouchMove);
    card.addEventListener('touchend', handleTouchEnd);

    return () => {
      card.removeEventListener('touchstart', handleTouchStart);
      card.removeEventListener('touchmove', handleTouchMove);
      card.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentIndex, submissions]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (view !== 'feed' || showResults) return;

      if (e.key === 'ArrowLeft') {
        handleVote('red');
      } else if (e.key === 'ArrowRight') {
        handleVote('green');
      } else if (e.key === ' ') {
        e.preventDefault();
        handleSkip();
      } else if (e.key === 'Backspace') {
        e.preventDefault();
        handleUndo();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [view, showResults, currentIndex]);

  const playSound = (type) => {
    if (!soundEnabled) return;

    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    if (type === 'vote') {
      oscillator.frequency.value = 440;
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    } else if (type === 'skip') {
      oscillator.frequency.value = 330;
      gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    }
  };

  const updateStreak = () => {
    const today = new Date().toDateString();
    if (lastVoteDate === today) return;

    const yesterday = new Date(Date.now() - 86400000).toDateString();
    if (lastVoteDate === yesterday || !lastVoteDate) {
      setVotingStreak(votingStreak + 1);
    } else {
      setVotingStreak(1);
    }
    setLastVoteDate(today);
    localStorage.setItem('lastVoteDate', today);
  };

  const filteredSubmissions = selectedCategory === 'All'
    ? submissions
    : submissions.filter(s => s.category === selectedCategory);

  const currentSubmission = filteredSubmissions[currentIndex];

  const handleVote = (voteType) => {
    if (!currentSubmission) return;

    if (!isPremium && dailyVotes >= 5) {
      alert('🔒 You\'ve reached your daily limit of 5 votes! Upgrade to Premium for unlimited voting.');
      return;
    }

    playSound('vote');
    setCardAnimation(voteType === 'red' ? 'slide-left' : 'slide-right');

    const updatedSubmission = {
      ...currentSubmission,
      votes: {
        ...currentSubmission.votes,
        [voteType]: currentSubmission.votes[voteType] + 1
      }
    };

    const updatedSubmissions = [...submissions];
    const originalIndex = submissions.findIndex(s => s.id === currentSubmission.id);
    updatedSubmissions[originalIndex] = updatedSubmission;
    setSubmissions(updatedSubmissions);

    setUserVotes({
      ...userVotes,
      [currentSubmission.id]: voteType
    });

    setVoteHistory([...voteHistory, { index: currentIndex, voteType, submission: currentSubmission }]);
    setVotedSubmissions(new Set([...votedSubmissions, currentSubmission.id]));
    setDailyVotes(dailyVotes + 1);
    updateStreak();

    setCurrentResults(updatedSubmission);
    setShowResults(true);

    setTimeout(() => {
      setCardAnimation('');
      setShowResults(false);
      setCurrentResults(null);
      if (currentIndex < filteredSubmissions.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(0);
      }
    }, 3000);
  };

  const handleSkip = () => {
    playSound('skip');
    setCardAnimation('slide-up');

    setTimeout(() => {
      setCardAnimation('');
      if (currentIndex < filteredSubmissions.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(0);
      }
    }, 300);
  };

  const handleUndo = () => {
    if (voteHistory.length === 0) return;

    const lastVote = voteHistory[voteHistory.length - 1];
    const updatedSubmissions = [...submissions];
    const submission = updatedSubmissions.find(s => s.id === lastVote.submission.id);

    if (submission) {
      submission.votes[lastVote.voteType]--;
    }

    setSubmissions(updatedSubmissions);
    setVoteHistory(voteHistory.slice(0, -1));
    setDailyVotes(Math.max(0, dailyVotes - 1));

    const newVotes = { ...userVotes };
    delete newVotes[lastVote.submission.id];
    setUserVotes(newVotes);

    setCurrentIndex(lastVote.index);
  };

  const toggleFavorite = (id) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  const handleShare = async (submission) => {
    const shareText = `🚩 or ✅? "${submission.text}" - Vote on Red Flag or Green Flag!`;
    const shareUrl = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Red Flag or Green Flag?',
          text: shareText,
          url: shareUrl
        });
      } catch (error) {
        console.log('Share cancelled');
      }
    } else {
      navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
      alert('✅ Link copied to clipboard!');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newSubmission.text.length < 10) {
      alert('Please write at least 10 characters');
      return;
    }

    if (newSubmission.text.length > 300) {
      alert('Maximum 300 characters allowed');
      return;
    }

    const submission = {
      id: Date.now(),
      ...newSubmission,
      votes: { red: 0, green: 0 },
      isUserSubmission: true
    };

    setUserSubmissions([submission, ...userSubmissions]);
    setSubmissions([submission, ...submissions]);

    setNewSubmission({ text: '', category: 'Dating/Relationships' });
    alert('✅ Your situation has been submitted!');
    setView('feed');
  };

  const calculatePercentages = (submission) => {
    const total = submission.votes.red + submission.votes.green;
    if (total === 0) return { red: 50, green: 50 };
    return {
      red: Math.round((submission.votes.red / total) * 100),
      green: Math.round((submission.votes.green / total) * 100)
    };
  };

  const getTrendingSubmissions = () => {
    return submissions
      .filter(s => {
        const total = s.votes.red + s.votes.green;
        if (total < 100) return false;
        const percentages = calculatePercentages(s);
        return Math.abs(percentages.red - 50) < 10;
      })
      .slice(0, 10);
  };

  const getTopSubmissions = () => {
    return [...submissions]
      .sort((a, b) => {
        const totalA = a.votes.red + a.votes.green;
        const totalB = b.votes.red + b.votes.green;
        return totalB - totalA;
      })
      .slice(0, 10);
  };

  const getFavoriteSubmissions = () => {
    return submissions.filter(s => favorites.has(s.id));
  };

  const charCount = newSubmission.text.length;
  const charCountColor = charCount < 10 ? 'text-red-500' : charCount > 250 ? 'text-yellow-500' : 'text-gray-400';

  return (
    <div className="min-h-screen bg-bg-dark text-white">
      <style jsx>{`
        @keyframes slide-left {
          to { transform: translateX(-100vw) rotate(-30deg); opacity: 0; }
        }
        @keyframes slide-right {
          to { transform: translateX(100vw) rotate(30deg); opacity: 0; }
        }
        @keyframes slide-up {
          to { transform: translateY(-100vh); opacity: 0; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .slide-left { animation: slide-left 0.3s ease-out; }
        .slide-right { animation: slide-right 0.3s ease-out; }
        .slide-up { animation: slide-up 0.3s ease-out; }
        .animate-fade-in { animation: fade-in 0.3s ease-out; }
      `}</style>

      {/* Header */}
      <header className="bg-card-dark border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-3xl">🚩</span>
              <h1 className="text-2xl font-bold">Red Flag or Green Flag?</h1>
              <span className="text-3xl">✅</span>
            </div>
            <div className="flex items-center space-x-4">
              {votingStreak > 0 && (
                <div className="px-3 py-1 bg-orange-600 rounded-lg text-sm font-semibold">
                  🔥 {votingStreak} day streak!
                </div>
              )}
              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className="p-2 hover:bg-gray-700 rounded-lg transition"
                title={soundEnabled ? 'Mute sounds' : 'Enable sounds'}
              >
                {soundEnabled ? '🔊' : '🔇'}
              </button>
              {!isPremium && (
                <>
                  <button
                    onClick={() => setIsPremium(true)}
                    className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:opacity-90 transition"
                  >
                    ⭐ Upgrade to Premium
                  </button>
                  <span className="text-sm text-gray-400">
                    {5 - dailyVotes} votes left today
                  </span>
                </>
              )}
              {isPremium && (
                <span className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold">
                  ⭐ Premium
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-card-dark border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex space-x-8 overflow-x-auto">
            <button
              onClick={() => setView('feed')}
              className={`py-4 px-2 border-b-2 font-medium transition whitespace-nowrap ${
                view === 'feed'
                  ? 'border-green-flag text-green-flag'
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              📱 Feed
            </button>
            <button
              onClick={() => setView('trending')}
              className={`py-4 px-2 border-b-2 font-medium transition whitespace-nowrap ${
                view === 'trending'
                  ? 'border-green-flag text-green-flag'
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              🔥 Trending
            </button>
            <button
              onClick={() => setView('top')}
              className={`py-4 px-2 border-b-2 font-medium transition whitespace-nowrap ${
                view === 'top'
                  ? 'border-green-flag text-green-flag'
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              🏆 Top Voted
            </button>
            <button
              onClick={() => setView('favorites')}
              className={`py-4 px-2 border-b-2 font-medium transition whitespace-nowrap ${
                view === 'favorites'
                  ? 'border-green-flag text-green-flag'
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              ⭐ Favorites ({favorites.size})
            </button>
            <button
              onClick={() => setView('submit')}
              className={`py-4 px-2 border-b-2 font-medium transition whitespace-nowrap ${
                view === 'submit'
                  ? 'border-green-flag text-green-flag'
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              ✍️ Submit
            </button>
            <button
              onClick={() => setView('mysubmissions')}
              className={`py-4 px-2 border-b-2 font-medium transition whitespace-nowrap ${
                view === 'mysubmissions'
                  ? 'border-green-flag text-green-flag'
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              📊 My Submissions
            </button>
          </div>
        </div>
      </nav>

      {/* Category Filter */}
      {(view === 'feed') && (
        <div className="bg-card-dark border-b border-gray-700">
          <div className="max-w-6xl mx-auto px-4 py-3">
            <div className="flex space-x-2 overflow-x-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setCurrentIndex(0);
                  }}
                  className={`px-4 py-2 rounded-lg font-medium transition whitespace-nowrap ${
                    selectedCategory === cat
                      ? 'bg-green-flag text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 py-8">
        {/* Feed View */}
        {view === 'feed' && (
          <div>
            {/* Progress Indicator */}
            <div className="mb-4 flex items-center justify-between">
              <div className="text-sm text-gray-400">
                Situation {currentIndex + 1} of {filteredSubmissions.length}
              </div>
              <div className="w-48 bg-gray-700 rounded-full h-2">
                <div
                  className="bg-green-flag h-2 rounded-full transition-all"
                  style={{ width: `${((currentIndex + 1) / filteredSubmissions.length) * 100}%` }}
                />
              </div>
            </div>

            {!showResults && currentSubmission && (
              <div className="space-y-6">
                <div
                  ref={cardRef}
                  className={`bg-card-dark rounded-2xl p-8 shadow-2xl transition-transform ${cardAnimation}`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="inline-block px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                      {currentSubmission.category}
                    </span>
                    <button
                      onClick={() => toggleFavorite(currentSubmission.id)}
                      className="text-2xl hover:scale-110 transition-transform"
                    >
                      {favorites.has(currentSubmission.id) ? '⭐' : '☆'}
                    </button>
                  </div>
                  <p className="text-2xl leading-relaxed mb-8">
                    {currentSubmission.text}
                  </p>
                  <div className="flex justify-between items-center space-x-4">
                    <button
                      onClick={() => handleVote('red')}
                      className="flex-1 bg-red-flag hover:bg-red-600 text-white py-4 px-6 rounded-xl font-bold text-lg transition transform hover:scale-105 flex items-center justify-center space-x-2"
                    >
                      <span className="text-2xl">🚩</span>
                      <span>RED FLAG</span>
                    </button>

                    <button
                      onClick={() => handleVote('green')}
                      className="flex-1 bg-green-flag hover:bg-green-600 text-white py-4 px-6 rounded-xl font-bold text-lg transition transform hover:scale-105 flex items-center justify-center space-x-2"
                    >
                      <span className="text-2xl">✅</span>
                      <span>GREEN FLAG</span>
                    </button>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-center space-x-4 mt-6">
                    <button
                      onClick={handleUndo}
                      disabled={voteHistory.length === 0}
                      className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      ↩️ Undo
                    </button>
                    <button
                      onClick={handleSkip}
                      className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition"
                    >
                      ⏭️ Skip
                    </button>
                    <button
                      onClick={() => handleShare(currentSubmission)}
                      className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition"
                    >
                      📤 Share
                    </button>
                  </div>

                  <div className="mt-4 text-center text-sm text-gray-500">
                    💡 Swipe left for 🚩 • Swipe right for ✅ • Arrow keys work too!
                  </div>
                </div>
              </div>
            )}

            {/* Results View */}
            {showResults && currentResults && (
              <div className="space-y-6 animate-fade-in">
                <div className="bg-card-dark rounded-2xl p-8 shadow-2xl">
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                      {currentResults.category}
                    </span>
                  </div>
                  <p className="text-xl leading-relaxed mb-6 text-gray-300">
                    {currentResults.text}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="flex items-center space-x-2">
                          <span className="text-2xl">🚩</span>
                          <span className="font-bold">Red Flag</span>
                        </span>
                        <span className="font-bold text-red-flag">
                          {calculatePercentages(currentResults).red}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                        <div
                          className="bg-red-flag h-3 transition-all duration-1000 ease-out"
                          style={{ width: `${calculatePercentages(currentResults).red}%` }}
                        ></div>
                      </div>
                      <div className="text-right text-sm text-gray-400 mt-1">
                        {currentResults.votes.red.toLocaleString()} votes
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="flex items-center space-x-2">
                          <span className="text-2xl">✅</span>
                          <span className="font-bold">Green Flag</span>
                        </span>
                        <span className="font-bold text-green-flag">
                          {calculatePercentages(currentResults).green}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                        <div
                          className="bg-green-flag h-3 transition-all duration-1000 ease-out"
                          style={{ width: `${calculatePercentages(currentResults).green}%` }}
                        ></div>
                      </div>
                      <div className="text-right text-sm text-gray-400 mt-1">
                        {currentResults.votes.green.toLocaleString()} votes
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <p className="text-green-flag font-semibold text-lg">
                      ✓ Your vote has been recorded!
                    </p>
                    <p className="text-gray-400 text-sm mt-2">
                      Loading next situation...
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Trending View */}
        {view === 'trending' && (
          <div className="space-y-4">
            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-2">🔥 Trending Situations</h2>
              <p className="text-gray-400">Most controversial votes (close to 50/50 split)</p>
            </div>
            {getTrendingSubmissions().map((sub) => {
              const percentages = calculatePercentages(sub);
              const total = sub.votes.red + sub.votes.green;
              return (
                <div key={sub.id} className="bg-card-dark rounded-xl p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="inline-block px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                      {sub.category}
                    </span>
                    <button
                      onClick={() => toggleFavorite(sub.id)}
                      className="text-xl hover:scale-110 transition-transform"
                    >
                      {favorites.has(sub.id) ? '⭐' : '☆'}
                    </button>
                  </div>
                  <p className="text-lg mb-4">{sub.text}</p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">🚩</span>
                      <div className="flex-1">
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-red-flag h-2 rounded-full"
                            style={{ width: `${percentages.red}%` }}
                          ></div>
                        </div>
                      </div>
                      <span className="font-semibold w-16 text-right">
                        {percentages.red}%
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">✅</span>
                      <div className="flex-1">
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-green-flag h-2 rounded-full"
                            style={{ width: `${percentages.green}%` }}
                          ></div>
                        </div>
                      </div>
                      <span className="font-semibold w-16 text-right">
                        {percentages.green}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-400">{total} total votes</p>
                      <button
                        onClick={() => handleShare(sub)}
                        className="text-sm text-gray-400 hover:text-green-flag transition"
                      >
                        📤 Share
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Top Voted View */}
        {view === 'top' && (
          <div className="space-y-4">
            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-2">🏆 Top Voted Situations</h2>
              <p className="text-gray-400">Most voted situations by the community</p>
            </div>
            {getTopSubmissions().map((sub, index) => {
              const percentages = calculatePercentages(sub);
              const total = sub.votes.red + sub.votes.green;
              return (
                <div key={sub.id} className="bg-card-dark rounded-xl p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl font-bold text-green-flag">#{index + 1}</span>
                      <span className="inline-block px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                        {sub.category}
                      </span>
                    </div>
                    <button
                      onClick={() => toggleFavorite(sub.id)}
                      className="text-xl hover:scale-110 transition-transform"
                    >
                      {favorites.has(sub.id) ? '⭐' : '☆'}
                    </button>
                  </div>
                  <p className="text-lg mb-4">{sub.text}</p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">🚩</span>
                      <div className="flex-1">
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-red-flag h-2 rounded-full"
                            style={{ width: `${percentages.red}%` }}
                          ></div>
                        </div>
                      </div>
                      <span className="font-semibold w-16 text-right">
                        {percentages.red}%
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">✅</span>
                      <div className="flex-1">
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-green-flag h-2 rounded-full"
                            style={{ width: `${percentages.green}%` }}
                          ></div>
                        </div>
                      </div>
                      <span className="font-semibold w-16 text-right">
                        {percentages.green}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-400">{total} total votes</p>
                      <button
                        onClick={() => handleShare(sub)}
                        className="text-sm text-gray-400 hover:text-green-flag transition"
                      >
                        📤 Share
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Favorites View */}
        {view === 'favorites' && (
          <div className="space-y-4">
            <h2 className="text-3xl font-bold mb-6">⭐ Your Favorites</h2>
            {getFavoriteSubmissions().length === 0 ? (
              <div className="bg-card-dark rounded-2xl p-12 text-center">
                <p className="text-gray-400 text-lg mb-4">
                  No favorites yet! Star situations you want to save.
                </p>
                <button
                  onClick={() => setView('feed')}
                  className="bg-green-flag hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold transition"
                >
                  Browse Feed
                </button>
              </div>
            ) : (
              getFavoriteSubmissions().map((sub) => {
                const percentages = calculatePercentages(sub);
                const total = sub.votes.red + sub.votes.green;
                return (
                  <div key={sub.id} className="bg-card-dark rounded-xl p-6">
                    <div className="flex justify-between items-start mb-3">
                      <span className="inline-block px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                        {sub.category}
                      </span>
                      <button
                        onClick={() => toggleFavorite(sub.id)}
                        className="text-xl hover:scale-110 transition-transform"
                      >
                        ⭐
                      </button>
                    </div>
                    <p className="text-lg mb-4">{sub.text}</p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <span className="text-xl">🚩</span>
                        <div className="flex-1">
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-red-flag h-2 rounded-full"
                              style={{ width: `${percentages.red}%` }}
                            ></div>
                          </div>
                        </div>
                        <span className="font-semibold w-16 text-right">
                          {percentages.red}%
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-xl">✅</span>
                        <div className="flex-1">
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-green-flag h-2 rounded-full"
                              style={{ width: `${percentages.green}%` }}
                            ></div>
                          </div>
                        </div>
                        <span className="font-semibold w-16 text-right">
                          {percentages.green}%
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-400">{total} total votes</p>
                        <button
                          onClick={() => handleShare(sub)}
                          className="text-sm text-gray-400 hover:text-green-flag transition"
                        >
                          📤 Share
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        )}

        {/* Submit View */}
        {view === 'submit' && (
          <div className="bg-card-dark rounded-2xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold mb-6">Submit Your Situation</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Category
                </label>
                <select
                  value={newSubmission.category}
                  onChange={(e) =>
                    setNewSubmission({ ...newSubmission, category: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-flag"
                >
                  {categories.filter(c => c !== 'All').map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Situation
                </label>
                <textarea
                  value={newSubmission.text}
                  onChange={(e) =>
                    setNewSubmission({ ...newSubmission, text: e.target.value })
                  }
                  placeholder="Describe your situation... (10-300 characters)"
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-flag h-32 resize-none"
                  maxLength={300}
                />
                <div className={`text-right text-sm mt-1 font-semibold ${charCountColor}`}>
                  {charCount}/300 {charCount < 10 && '(minimum 10 characters)'}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-green-flag hover:bg-green-600 text-white py-4 px-6 rounded-xl font-bold text-lg transition"
              >
                Submit Situation
              </button>
            </form>

            <div className="mt-8 p-4 bg-gray-700 rounded-lg">
              <h3 className="font-semibold mb-2">📋 Guidelines</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>✓ Keep it anonymous (no names or identifying info)</li>
                <li>✓ Be respectful and honest</li>
                <li>✗ No hate speech or harassment</li>
                <li>✗ No explicit content</li>
              </ul>
            </div>
          </div>
        )}

        {/* My Submissions View */}
        {view === 'mysubmissions' && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">My Submissions</h2>
            {userSubmissions.length === 0 ? (
              <div className="bg-card-dark rounded-2xl p-12 text-center">
                <p className="text-gray-400 text-lg mb-4">
                  You haven't submitted anything yet!
                </p>
                <button
                  onClick={() => setView('submit')}
                  className="bg-green-flag hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold transition"
                >
                  Submit Your First Situation
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {userSubmissions.map((sub) => {
                  const percentages = calculatePercentages(sub);
                  const total = sub.votes.red + sub.votes.green;
                  return (
                    <div key={sub.id} className="bg-card-dark rounded-xl p-6">
                      <div className="mb-3">
                        <span className="inline-block px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                          {sub.category}
                        </span>
                      </div>
                      <p className="text-lg mb-4">{sub.text}</p>
                      {total > 0 ? (
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <span className="text-xl">🚩</span>
                            <div className="flex-1">
                              <div className="w-full bg-gray-700 rounded-full h-2">
                                <div
                                  className="bg-red-flag h-2 rounded-full"
                                  style={{ width: `${percentages.red}%` }}
                                ></div>
                              </div>
                            </div>
                            <span className="font-semibold w-16 text-right">
                              {percentages.red}%
                            </span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span className="text-xl">✅</span>
                            <div className="flex-1">
                              <div className="w-full bg-gray-700 rounded-full h-2">
                                <div
                                  className="bg-green-flag h-2 rounded-full"
                                  style={{ width: `${percentages.green}%` }}
                                ></div>
                              </div>
                            </div>
                            <span className="font-semibold w-16 text-right">
                              {percentages.green}%
                            </span>
                          </div>
                          <p className="text-sm text-gray-400 text-center">
                            {total} total votes
                          </p>
                        </div>
                      ) : (
                        <p className="text-gray-400 text-center">No votes yet</p>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-card-dark border-t border-gray-700 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center text-gray-400 space-y-2">
            <p className="text-lg font-semibold text-white">
              Red Flag or Green Flag?
            </p>
            <p className="text-sm">
              The community helping Gen Z navigate life's tough decisions
            </p>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="#" className="hover:text-green-flag transition">
                Privacy
              </a>
              <a href="#" className="hover:text-green-flag transition">
                Terms
              </a>
              <a href="#" className="hover:text-green-flag transition">
                Contact
              </a>
            </div>
            <p className="text-xs mt-4">
              © 2024 Red Flag or Green Flag. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
