import { useState, useEffect } from 'react';

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
  const [view, setView] = useState('feed'); // 'feed', 'submit', 'mysubmissions'
  const [submissions, setSubmissions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [votedSubmissions, setVotedSubmissions] = useState(new Set());
  const [userVotes, setUserVotes] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [currentResults, setCurrentResults] = useState(null);
  const [userSubmissions, setUserSubmissions] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isPremium, setIsPremium] = useState(false);
  const [dailyVotes, setDailyVotes] = useState(0);

  // New submission form
  const [newSubmission, setNewSubmission] = useState({
    text: '',
    category: 'Dating/Relationships'
  });

  useEffect(() => {
    // Shuffle and load submissions
    const shuffled = [...seedSubmissions].sort(() => Math.random() - 0.5);
    setSubmissions(shuffled);
  }, []);

  const currentSubmission = submissions[currentIndex];

  const handleVote = (voteType) => {
    if (!currentSubmission) return;
    
    // Check vote limit for free users
    if (!isPremium && dailyVotes >= 5) {
      alert('🔒 You\'ve reached your daily limit of 5 votes! Upgrade to Premium for unlimited voting.');
      return;
    }

    // Record vote
    const updatedSubmission = {
      ...currentSubmission,
      votes: {
        ...currentSubmission.votes,
        [voteType]: currentSubmission.votes[voteType] + 1
      }
    };

    // Update submissions
    const updatedSubmissions = [...submissions];
    updatedSubmissions[currentIndex] = updatedSubmission;
    setSubmissions(updatedSubmissions);

    // Track user vote
    setUserVotes({
      ...userVotes,
      [currentSubmission.id]: voteType
    });

    setVotedSubmissions(new Set([...votedSubmissions, currentSubmission.id]));
    setDailyVotes(dailyVotes + 1);

    // Show results
    setCurrentResults(updatedSubmission);
    setShowResults(true);

    // Auto-advance after 3 seconds
    setTimeout(() => {
      setShowResults(false);
      setCurrentResults(null);
      if (currentIndex < submissions.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(0); // Loop back
      }
    }, 3000);
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

  return (
    <div className="min-h-screen bg-bg-dark text-white">
      {/* Header */}
      <header className="bg-card-dark border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-3xl">🚩</span>
              <h1 className="text-2xl font-bold">Red Flag or Green Flag?</h1>
              <span className="text-3xl">✅</span>
            </div>
            <div className="flex items-center space-x-4">
              {!isPremium && (
                <button
                  onClick={() => setIsPremium(true)}
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:opacity-90 transition"
                >
                  ⭐ Upgrade to Premium
                </button>
              )}
              {isPremium && (
                <span className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold">
                  ⭐ Premium
                </span>
              )}
              {!isPremium && (
                <span className="text-sm text-gray-400">
                  {5 - dailyVotes} votes left today
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-card-dark border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex space-x-8">
            <button
              onClick={() => setView('feed')}
              className={`py-4 px-2 border-b-2 font-medium transition ${
                view === 'feed'
                  ? 'border-green-flag text-green-flag'
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              📱 Feed
            </button>
            <button
              onClick={() => setView('submit')}
              className={`py-4 px-2 border-b-2 font-medium transition ${
                view === 'submit'
                  ? 'border-green-flag text-green-flag'
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              ✍️ Submit
            </button>
            <button
              onClick={() => setView('mysubmissions')}
              className={`py-4 px-2 border-b-2 font-medium transition ${
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

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 py-8">
        {/* Feed View */}
        {view === 'feed' && (
          <div>
            {!showResults && currentSubmission && (
              <div className="space-y-6">
                {/* Card */}
                <div className="bg-card-dark rounded-2xl p-8 shadow-2xl">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                      {currentSubmission.category}
                    </span>
                  </div>
                  <p className="text-2xl leading-relaxed mb-8">
                    {currentSubmission.text}
                  </p>
                  <div className="flex justify-between items-center space-x-4">
                    {/* Red Flag Button */}
                    <button
                      onClick={() => handleVote('red')}
                      className="flex-1 bg-red-flag hover:bg-red-600 text-white py-4 px-6 rounded-xl font-bold text-lg transition transform hover:scale-105 flex items-center justify-center space-x-2"
                    >
                      <span className="text-2xl">🚩</span>
                      <span>RED FLAG</span>
                    </button>
                    
                    {/* Green Flag Button */}
                    <button
                      onClick={() => handleVote('green')}
                      className="flex-1 bg-green-flag hover:bg-green-600 text-white py-4 px-6 rounded-xl font-bold text-lg transition transform hover:scale-105 flex items-center justify-center space-x-2"
                    >
                      <span className="text-2xl">✅</span>
                      <span>GREEN FLAG</span>
                    </button>
                  </div>
                </div>

                <div className="text-center text-gray-400 text-sm">
                  Situation {currentIndex + 1} of {submissions.length}
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
                  
                  {/* Results Bars */}
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
                  {categories.map((cat) => (
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
                <div className="text-right text-sm text-gray-400 mt-1">
                  {newSubmission.text.length}/300
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
