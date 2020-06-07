import Vue from 'vue'
import Router from 'vue-router'
import HomeView from './components/templates/HomeView.vue'
import LoginView from './components/templates/LoginView.vue'
import AboutView from './components/templates/AboutView.vue'
import CalendarView from './components/templates/CalendarView.vue'
import DayTable from './components/organisms/DayTable.vue'
import WeekTable from './components/organisms/WeekTable.vue'
import MonthTable from './components/organisms/MonthTable.vue'
import YearTable from './components/organisms/YearTable.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: CalendarView,
      children: [
        {
          path: 'day',
          component: DayTable
        },
        {
          path: 'week',
          component: WeekTable
        },
        {
          path: 'month/:year/:month/:day',
          component: MonthTable
        },
        {
          path: 'year',
          component: YearTable
        }
      ]
    }
  ]
})
