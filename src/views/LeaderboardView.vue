<template>
  <div class="page-content">
    <header class="top-bar">
      <div class="logo-circle"></div>
      <h1>CHORE WARS</h1>
      <Bell size="22" />
    </header>

    <main class="content">
      <section class="hero-title">
        <h2>Hall of Heroes</h2>
        <div class="champion-badge">
          <Star size="13" fill="#2b1647" />
          <span>OCTOBER CHAMPIONS</span>
        </div>
      </section>

      <section class="podium-section">
        <Trophy class="trophy-icon" size="34" fill="#ffd400" />

        <div class="winner-avatar">
          <UserRound size="72" />
          <span class="rank-badge">1</span>
        </div>

        <div class="side-player left-player">
          <div class="side-avatar">
            <UserRound size="45" />
          </div>
          <span class="rank-small">2</span>
          <div class="side-card">
            <h4>Sir Scrub-a-lot</h4>
            <p>1,420 XP</p>
          </div>
        </div>

        <div class="winner-card">
          <h3>LADY VACUUM</h3>
          <p>2,850 XP</p>
        </div>

        <div class="side-player right-player">
          <div class="side-avatar">
            <UserRound size="45" />
          </div>
          <span class="rank-small">3</span>
          <div class="side-card">
            <h4>Dust Buster</h4>
            <p>980 XP</p>
          </div>
        </div>
      </section>

      <section class="battle-card">
        <div class="battle-header">
          <div>
            <h3>Battle Intensity</h3>
            <p>Point distribution (Last 30 Days)</p>
          </div>

          <div class="total-xp">
            <strong>8.4k</strong>
            <span>TOTAL XP</span>
          </div>
        </div>
        
<!--Dodat kasnije opciju korisniku za mjesečnu i tjednu statistiku -->
        <div class="stats-tabs">
          <button class="active">Weekly</button>
          <button>Monthly</button>
        </div>

        <div class="chart">
          <div class="bar small"></div>
          <div class="bar active">
            <span>Peak</span>
          </div>
          <div class="bar medium"></div>
        </div>

        <div class="chart-labels">
          <span>START</span>
          <span>ACTIVE COMBAT ZONE</span>
          <span>NOW</span>
        </div>
      </section>

      <section class="catching-card">
        <div class="rank-circle">#12</div>
        <div>
          <h3>You're catching up!</h3>
          <p>85 XP to reach the Top 10</p>
        </div>
        <button>FIGHT ON</button>
      </section>
    </main>
  </div>
</template>

<script>
import {
  Bell,
  Star,
  Trophy,
  UserRound
} from 'lucide-vue-next'

export default {
  name: 'LeaderboardView',
  components: {
    Bell,
    Star,
    Trophy,
    UserRound
  }
}
</script>

<style scoped>
.page-content {
  width: 100%;
  min-height: 100vh;
  background: #ffffff;
  color: #241238;
}

.top-bar {
  height: 72px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  gap: 14px;
  background: white;
  box-shadow: 0 8px 22px rgba(80, 40, 120, 0.08);
  color: #7b2cff;
}

.logo-circle {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: radial-gradient(circle, #0f172a, #111827);
  border: 3px solid #7b2cff;
}

.top-bar h1 {
  flex: 1;
  margin: 0;
  font-size: 20px;
  font-style: italic;
  font-weight: 900;
  letter-spacing: 1px;
}

.content {
  padding: 34px 24px 130px;
}

.hero-title {
  text-align: center;
  margin-bottom: 28px;
}

.hero-title h2 {
  margin: 0 0 10px;
  font-size: 33px;
  font-weight: 900;
}

.champion-badge {
  width: fit-content;
  margin: 0 auto;
  padding: 8px 16px;
  border-radius: 999px;
  background: #ffd400;
  color: #2b1647;
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 1px;
}

.podium-section {
  position: relative;
  height: 310px;
  margin-bottom: 34px;
}

.trophy-icon {
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  color: #ffd400;
}

.winner-avatar {
  position: absolute;
  top: 54px;
  left: 50%;
  transform: translateX(-50%);
  width: 108px;
  height: 108px;
  border-radius: 50%;
  background: #ccf6e9;
  color: #241238;
  border: 7px solid #ffd400;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 28px rgba(255, 212, 0, 0.55);
}

.rank-badge {
  position: absolute;
  right: -9px;
  bottom: 6px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #b89b00;
  color: white;
  border: 3px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
}

.winner-card {
  position: absolute;
  top: 168px;
  left: 50%;
  transform: translateX(-50%);
  width: 118px;
  height: 132px;
  padding-top: 28px;
  text-align: center;
  background: linear-gradient(180deg, #a89200, #ffd400);
  color: white;
  box-shadow: 0 14px 30px rgba(130, 105, 0, 0.32);
}

.winner-card h3 {
  margin: 0;
  font-size: 15px;
  font-weight: 900;
}

.winner-card p {
  margin: 7px 0 0;
  color: #3b2e00;
  font-size: 13px;
  font-weight: 900;
  letter-spacing: 1px;
}

.side-player {
  position: absolute;
  top: 128px;
  width: 96px;
  text-align: center;
}

.left-player {
  left: 4px;
}

.right-player {
  right: 4px;
}

.side-avatar {
  position: relative;
  z-index: 2;
  width: 70px;
  height: 70px;
  margin: 0 auto -8px;
  border-radius: 50%;
  background: #111827;
  color: white;
  border: 5px solid #eadcff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 18px rgba(80, 40, 120, 0.2);
}

.rank-small {
  position: absolute;
  top: 48px;
  right: 5px;
  z-index: 3;
  width: 27px;
  height: 27px;
  border-radius: 50%;
  background: #d9c2ff;
  color: #7b2cff;
  border: 3px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 900;
}

.side-card {
  min-height: 72px;
  padding: 26px 8px 10px;
  background: #eadcff;
}

.side-card h4 {
  margin: 0;
  font-size: 12px;
  font-weight: 900;
}

.side-card p {
  margin: 4px 0 0;
  color: #7b2cff;
  font-size: 12px;
  font-weight: 900;
}

.battle-card {
  padding: 28px 30px;
  border-radius: 28px;
  background: #fffaff;
  box-shadow: 0 16px 35px rgba(80, 40, 120, 0.09);
  margin-bottom: 28px;
}

.battle-header {
  display: flex;
  justify-content: space-between;
  gap: 16px;
}

.battle-header h3 {
  margin: 0;
  font-size: 22px;
  font-weight: 900;
}

.battle-header p {
  margin: 6px 0 0;
  color: #6d5d7d;
  font-size: 14px;
  line-height: 1.3;
}

.total-xp {
  text-align: right;
  color: #00846f;
}

.total-xp strong {
  display: block;
  font-size: 28px;
  font-weight: 900;
}

.total-xp span {
  display: block;
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 1px;
}

.chart {
  height: 170px;
  margin-top: 28px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 28px;
}

.bar {
  width: 52px;
  border-radius: 26px 26px 0 0;
  background: #f1e1ff;
}

.bar.small {
  height: 80px;
}

.bar.medium {
  height: 100px;
}

.bar.active {
  position: relative;
  height: 145px;
  background: linear-gradient(180deg, #8b5cf6, #6d28d9);
  box-shadow: 0 10px 25px rgba(123, 44, 255, 0.28);
}

.bar.active span {
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  background: #241238;
  color: white;
  padding: 5px 10px;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 900;
}

.chart-labels {
  display: flex;
  justify-content: space-between;
  color: #c1aecb;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 1px;
}

.catching-card {
  min-height: 115px;
  padding: 24px;
  border-radius: 28px;
  background: linear-gradient(135deg, #7b2cff, #6d28d9);
  color: white;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: 0 18px 30px rgba(123, 44, 255, 0.32);
  overflow: hidden;
}

.rank-circle {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
}

.catching-card h3 {
  margin: 0;
  font-size: 17px;
  font-weight: 900;
}

.catching-card p {
  margin: 5px 0 0;
  font-size: 13px;
  opacity: 0.9;
}

.catching-card button {
  margin-left: auto;
  border: none;
  padding: 14px 18px;
  border-radius: 999px;
  background: white;
  color: #6d28d9;
  font-size: 12px;
  font-weight: 900;
}
</style>