import React, { useState, useEffect, useMemo } from 'react';
import { Activity, Target, Flame, Heart, TrendingUp, Award, Calendar, Clock } from 'lucide-react';
import femaleAvatar from '../../Assets/images/female-avatar.png';
import maleAvatar from '../../Assets/images/male-avatar.png'
const UserProfile = () => {
  const userData = JSON.parse(localStorage.getItem("user"));
  const [activeTab, setActiveTab] = useState('overview');
  const [animateStats, setAnimateStats] = useState(false);
 
  useEffect(() => {
    setAnimateStats(true);
  }, []);

  const defaultAvatar = useMemo(() => {
  return userData?.gender === 'female'
    ? femaleAvatar
    : maleAvatar;
}, [userData?.gender]);

 if (!userData) {
    return <div className="text-center mt-5">No user data found. Please log in.</div>;
  }





  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#000000',
      color: '#ffffff',
      padding: '24px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    maxWidth: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    header: {
      background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
      borderRadius: '16px',
      padding: '32px',
      marginBottom: '32px',
      border: '1px solid #374151',
      boxShadow: '0 10px 25px rgba(0,0,0,0.5)'
    },
    headerContent: {
      display: 'flex',
      alignItems: 'center',
      gap: '24px',
      flexWrap: 'wrap'
    },
    avatar: {
      position: 'relative',
      flexShrink: 0
    },
    avatarImg: {
      width: '96px',
      height: '96px',
      borderRadius: '50%',
      border: '4px solid #ef4444',
      objectFit: 'cover',
      backgroundColor: '#374151'
    },
    levelBadge: {
      position: 'absolute',
      bottom: '-8px',
      right: '-8px',
      backgroundColor: '#ef4444',
      color: '#ffffff',
      fontSize: '12px',
      fontWeight: 'bold',
      borderRadius: '50%',
      width: '32px',
      height: '32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    headerInfo: {
      flex: 1,
      minWidth: '300px'
    },
    userName: {
      fontSize: '36px',
      fontWeight: 'bold',
      marginBottom: '8px',
      margin: 0
    },
    userStats: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      color: '#d1d5db',
      marginBottom: '16px',
      flexWrap: 'wrap'
    },
    statItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px'
    },
    progressContainer: {
      marginTop: '16px'
    },
    progressHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '8px',
      fontSize: '14px',
      color: '#9ca3af'
    },
    progressBar: {
      width: '100%',
      height: '8px',
      backgroundColor: '#374151',
      borderRadius: '4px',
      overflow: 'hidden'
    },
    progressFill: {
      height: '100%',
      backgroundColor: '#ef4444',
      borderRadius: '4px',
      transition: 'width 1s ease-out'
    },
    tabContainer: {
      display: 'flex',
      gap: '4px',
      marginBottom: '32px',
      backgroundColor: '#1f2937',
      borderRadius: '12px',
      padding: '4px',
      border: '1px solid #374151'
    },
    tab: {
      flex: 1,
      padding: '12px 16px',
      borderRadius: '8px',
      fontWeight: '500',
      textTransform: 'capitalize',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      border: 'none',
      fontSize: '14px'
    },
    activeTab: {
      backgroundColor: '#ef4444',
      color: '#ffffff',
      boxShadow: '0 4px 12px rgba(239, 68, 68, 0.3)'
    },
    inactiveTab: {
      color: '#9ca3af',
      backgroundColor: 'transparent'
    },
    grid: {
      display: 'grid',
      gap: '24px',
      marginBottom: '32px'
    },
    grid4: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'
    },
    grid2: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
    },
    statCard: {
      backgroundColor: '#1f2937',
      borderRadius: '12px',
      padding: '24px',
      border: '1px solid #374151',
      transition: 'all 0.3s ease',
      cursor: 'default'
    },
    statCardHover: {
      borderColor: '#ef4444',
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 25px rgba(0,0,0,0.3)'
    },
    statCardHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '16px'
    },
    statValue: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '8px'
    },
    statNumber: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#ffffff'
    },
    statUnit: {
      fontSize: '14px',
      color: '#9ca3af'
    },
    statLabel: {
      fontSize: '14px',
      color: '#9ca3af',
      fontWeight: '500'
    },
    chartContainer: {
      backgroundColor: '#1f2937',
      borderRadius: '12px',
      padding: '24px',
      border: '1px solid #374151'
    },
    chartHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '24px',
      fontSize: '18px',
      fontWeight: '600'
    },
    chartBars: {
      display: 'flex',
      alignItems: 'end',
      justifyContent: 'space-between',
      height: '128px',
      gap: '8px',
      marginBottom: '16px'
    },
    chartDay: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px',
      flex: 1
    },
    chartBarsContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '4px',
      width: '100%'
    },
    chartBar1: {
      backgroundColor: '#ef4444',
      borderRadius: '2px 2px 0 0',
      width: '100%',
      transition: 'all 1s ease-out',
      minHeight: '4px'
    },
    chartBar2: {
      backgroundColor: '#ffffff',
      borderRadius: '2px 2px 0 0',
      width: '100%',
      transition: 'all 1s ease-out',
      minHeight: '4px'
    },
    chartLegend: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '16px',
      fontSize: '14px'
    },
    legendItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    legendColor: {
      width: '12px',
      height: '12px',
      borderRadius: '2px'
    },
    button: {
      padding: '16px 24px',
      borderRadius: '12px',
      fontWeight: '600',
      fontSize: '16px',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px'
    },
    buttonPrimary: {
      backgroundColor: '#ef4444',
      color: '#ffffff'
    },
    buttonSecondary: {
      backgroundColor: '#1f2937',
      color: '#ffffff',
      border: '1px solid #374151'
    },
    achievementCard: {
      backgroundColor: '#1f2937',
      borderRadius: '12px',
      padding: '24px',
      border: '1px solid #374151',
      transition: 'all 0.3s ease'
    },
    achievementUnlocked: {
      borderColor: '#ef4444',
      background: 'linear-gradient(135deg, #1f2937 0%, #7f1d1d 100%)'
    },
    achievementContent: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    },
    achievementIcon: {
      fontSize: '32px'
    },
    achievementTitle: {
      fontSize: '18px',
      fontWeight: '600',
      marginBottom: '4px'
    },
    achievementDesc: {
      color: '#9ca3af',
      fontSize: '14px',
      marginBottom: '8px'
    },
    achievementBadge: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      color: '#ef4444',
      fontSize: '12px',
      fontWeight: '500'
    },
    historyItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px',
      backgroundColor: '#374151',
      borderRadius: '8px',
      marginBottom: '12px',
      transition: 'background-color 0.3s ease'
    },
    historyLeft: {
      display: 'flex',
      flexDirection: 'column'
    },
    historyRight: {
      textAlign: 'right'
    },
    historyTitle: {
      fontWeight: '500',
      marginBottom: '4px'
    },
    historyDate: {
      color: '#9ca3af',
      fontSize: '14px'
    },
    historyDuration: {
      fontWeight: '500',
      marginBottom: '4px'
    },
    historyCalories: {
      color: '#ef4444',
      fontSize: '14px'
    }
  };

  const StatCard = ({ icon: Icon, label, value, unit }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <div 
        style={{
          ...styles.statCard,
          ...(isHovered ? styles.statCardHover : {})
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={styles.statCardHeader}>
          <Icon size={32} color="#ef4444" />
          <span style={styles.statLabel}>{label}</span>
        </div>
        <div style={styles.statValue}>
          <span style={styles.statNumber}>
            {value.toLocaleString()}
          </span>
          <span style={styles.statUnit}>{unit}</span>
        </div>
      </div>
    );
  };

  const WeeklyChart = () => (
    <div style={styles.chartContainer}>
      <div style={styles.chartHeader}>
        <TrendingUp size={20} color="#ef4444" />
        Weekly Progress
      </div>
      <div style={styles.chartBars}>
        {userData.weeklyProgress.map((day, index) => (
          <div key={index} style={styles.chartDay}>
            <div style={styles.chartBarsContainer}>
              <div 
                style={{
                  ...styles.chartBar1,
                  height: `${(day.calories / 3000) * 80}px`
                }}
              />
              <div 
                style={{
                  ...styles.chartBar2,
                  height: `${(day.steps / 12000) * 60}px`
                }}
              />
            </div>
            <span style={{ color: '#9ca3af', fontSize: '12px', fontWeight: '500' }}>
              {day.day}
            </span>
          </div>
        ))}
      </div>
      <div style={styles.chartLegend}>
        <div style={styles.legendItem}>
          <div style={{ ...styles.legendColor, backgroundColor: '#ef4444' }} />
          <span style={{ color: '#9ca3af' }}>Calories</span>
        </div>
        <div style={styles.legendItem}>
          <div style={{ ...styles.legendColor, backgroundColor: '#ffffff' }} />
          <span style={{ color: '#9ca3af' }}>Steps</span>
        </div>
      </div>
    </div>
  );

  return (
    <div>
    <div style={styles.container}>
      <div style={styles.maxWidth}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.headerContent}>
             <img src={defaultAvatar} style={styles.avatarImg} alt="User Avatar" />
            <div style={styles.levelBadge}>
              {userData.level}
            </div>
          </div>

            
            <div style={styles.headerInfo}>
              <h1 style={styles.userName}>{userData.name}</h1>
              <div style={styles.userStats}>
                <div style={styles.statItem}>
                  <Flame size={16} color="#ef4444" />
                  <span>{userData.streak} day streak</span>
                </div>
                <div style={styles.statItem}>
                  <Target size={16} color="#ef4444" />
                  <span>{userData.totalWorkouts} workouts</span>
                </div>
              </div>
              
              <div style={styles.progressContainer}>
                <div style={styles.progressHeader}>
                  <span>Level Progress</span>
                  <span>{userData.xp}/{userData.xpToNext} XP</span>
                </div>
                <div style={styles.progressBar}>
                  <div 
                    style={{
                      ...styles.progressFill,
                      width: `${(userData.xp / userData.xpToNext) * 100}%`
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div style={styles.tabContainer}>
          {['overview', 'achievements', 'history'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                ...styles.tab,
                ...(activeTab === tab ? styles.activeTab : styles.inactiveTab)
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === 'overview' && (
          <div>
            {/* Today's Stats */}
            <div style={{ ...styles.grid, ...styles.grid4 }}>
              <StatCard 
                icon={Flame} 
                label="Calories Burned" 
                value={userData.stats.caloriesBurned} 
                unit="kcal" 
              />
              <StatCard 
                icon={Activity} 
                label="Steps Today" 
                value={userData.stats.stepsToday} 
                unit="steps" 
              />
              <StatCard 
                icon={Heart} 
                label="Heart Rate" 
                value={userData.stats.heartRate} 
                unit="bpm" 
              />
              <StatCard 
                icon={Clock} 
                label="Workout Time" 
                value={userData.stats.workoutTime} 
                unit="min" 
              />
            </div>

            {/* Weekly Chart */}
            <div style={{ marginBottom: '32px' }}>
              <WeeklyChart />
            </div>

            {/* Quick Actions */}
            <div style={{ ...styles.grid, ...styles.grid2 }}>
              <button style={{ ...styles.button, ...styles.buttonPrimary }}>
                <Activity size={20} />
                Start Workout
              </button>
              <button style={{ ...styles.button, ...styles.buttonSecondary }}>
                <Calendar size={20} />
                View Schedule
              </button>
            </div>
          </div>
        )}

        {activeTab === 'achievements' && (
          <div style={{ ...styles.grid, ...styles.grid2 }}>
            {userData.achievements.map((achievement) => (
              <div 
                key={achievement.id}
                style={{
                  ...styles.achievementCard,
                  ...(achievement.unlocked ? styles.achievementUnlocked : {})
                }}
              >
                <div style={styles.achievementContent}>
                  <div 
                    style={{
                      ...styles.achievementIcon,
                      filter: achievement.unlocked ? 'none' : 'grayscale(1) opacity(0.5)'
                    }}
                  >
                    {achievement.icon}
                  </div>
                  <div>
                    <div 
                      style={{
                        ...styles.achievementTitle,
                        color: achievement.unlocked ? '#ffffff' : '#6b7280'
                      }}
                    >
                      {achievement.name}
                    </div>
                    <div style={styles.achievementDesc}>{achievement.desc}</div>
                    {achievement.unlocked && (
                      <div style={styles.achievementBadge}>
                        <Award size={16} />
                        UNLOCKED
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'history' && (
          <div style={styles.chartContainer}>
            <div style={styles.chartHeader}>
              <Calendar size={20} color="#ef4444" />
              Workout History
            </div>
            <div>
              {[
                { date: 'Today', workout: 'HIIT Cardio', duration: '45 min', calories: 520 },
                { date: 'Yesterday', workout: 'Strength Training', duration: '60 min', calories: 480 },
                { date: '2 days ago', workout: 'Yoga Flow', duration: '30 min', calories: 180 },
                { date: '3 days ago', workout: 'Running', duration: '40 min', calories: 420 }
              ].map((session, index) => (
                <div key={index} style={styles.historyItem}>
                  <div style={styles.historyLeft}>
                    <div style={styles.historyTitle}>{session.workout}</div>
                    <div style={styles.historyDate}>{session.date}</div>
                  </div>
                  <div style={styles.historyRight}>
                    <div style={styles.historyDuration}>{session.duration}</div>
                    <div style={styles.historyCalories}>{session.calories} cal</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>

  );
};

export default UserProfile;