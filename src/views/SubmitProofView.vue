<template>
  <div class="submit-page">
    <div class="mobile-page">
      <header class="top-bar">
        <div class="logo-circle"></div>
        <h1>CHORE WARS</h1>
        <Bell size="18" />
      </header>

      <main class="content">
        <RouterLink to="/chores" class="back-link">
          ← Back to Quest
        </RouterLink>

        <section class="proof-card">
          <p class="small-label">QUEST COMPLETION</p>

          <h2>Submit Proof</h2>

          <p class="description">
            Your heroic efforts deserve recognition.
            Show the world your victory!
          </p>

          <div class="upload-box">
            <div class="camera-circle">
              <Camera size="30" />
            </div>

            <h3>Upload Photo</h3>
            <p>JPG, PNG up to 10MB</p>
          </div>

          <label class="notes-label">Quest Notes</label>

          <textarea
            v-model="questNotes"
            placeholder="Tell the tale of your struggle and triumph..."
          ></textarea>

          <button class="submit-button">
            Submit for Points
            <Send size="18" />
          </button>
        </section>

        <p class="verification">
          Verification usually takes less than 5 minutes
        </p>
      </main>
    </div>
  </div>
</template>

<script>
import { Bell, Camera, Send } from 'lucide-vue-next'

export default {
  name: 'SubmitProofView',

  components: {
    Bell,
    Camera,
    Send
  },

  data() {
    return {
      questNotes: ''
    }
  }
}
</script>

<style scoped>
.submit-page {
  min-height: 100vh;
  background: #eeeeee;
  display: flex;
  justify-content: center;
  font-family: Arial, sans-serif;
}

.mobile-page {
  width: 390px;
  min-height: 100vh;
  background: #ffffff;
  color: #241238;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.08);
}

.top-bar {
  height: 58px;
  padding: 0 18px;
  display: flex;
  align-items: center;
  gap: 10px;
  background: white;
  box-shadow: 0 8px 22px rgba(80, 40, 120, 0.08);
  color: #7b2cff;
}

.logo-circle {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: radial-gradient(circle, #0f172a, #111827);
  border: 2px solid #7b2cff;
}

.top-bar h1 {
  flex: 1;
  margin: 0;
  font-size: 16px;
  font-style: italic;
  font-weight: 900;
}

.content {
  padding: 28px 28px 100px;
}

.back-link {
  display: inline-block;
  margin-bottom: 12px;
  color: #241238;
  text-decoration: none;
  font-size: 13px;
  font-weight: 800;
}

.proof-card {
  border: 2px solid #d8f0f3;
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 10px 25px rgba(80, 40, 120, 0.08);
}

.small-label {
  margin: 0 0 8px;
  color: #00a884;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 2px;
}

.proof-card h2 {
  margin: 0;
  font-size: 30px;
  font-weight: 900;
}

.description {
  margin: 12px 0 24px;
  color: #6d5d7d;
  font-size: 15px;
  line-height: 1.4;
}

.upload-box {
  height: 150px;
  background: #f3dcff;
  border: 2px dashed #e4c4f4;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 22px;
}

.camera-circle {
  width: 62px;
  height: 62px;
  border-radius: 50%;
  background: #dfb8ff;
  color: #7b2cff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

.upload-box h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 900;
}

.upload-box p {
  margin: 4px 0 0;
  font-size: 11px;
  color: #6d5d7d;
}

.notes-label {
  display: block;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 900;
}

textarea {
  width: 100%;
  min-height: 110px;
  border: none;
  border-radius: 22px;
  background: #f3e4ff;
  padding: 18px;
  resize: none;
  outline: none;
  color: #241238;
  font-family: Arial, sans-serif;
  font-size: 14px;
}

.submit-button {
  width: 100%;
  height: 58px;
  margin-top: 28px;
  border: none;
  border-radius: 28px;
  background: linear-gradient(135deg, #8b5cf6, #6d28d9);
  color: white;
  font-size: 15px;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: 0 14px 28px rgba(123, 44, 255, 0.35);
  cursor: pointer;
}

.verification {
  margin-top: 28px;
  text-align: center;
  color: #8a719e;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
}
</style>