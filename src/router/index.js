import { createRouter, createWebHistory } from 'vue-router'

import DashboardView from '../views/DashboardView.vue'
import ChoresView from '../views/ChoresView.vue'
import SubmitProofView from '../views/SubmitProofView.vue'
import LeaderboardView from '../views/LeaderboardView.vue'
import ProfileView from '../views/ProfileView.vue'

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView
  },
  {
    path: '/chores',
    name: 'Chores',
    component: ChoresView
  },
  {
    path: '/submit-proof',
    name: 'SubmitProof',
    component: SubmitProofView
  },
  {
    path: '/leaderboard',
    name: 'Leaderboard',
    component: LeaderboardView
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfileView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router