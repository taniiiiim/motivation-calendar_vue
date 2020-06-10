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
import NotFound from './components/templates/NotFound.vue'

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
          path: 'day/:year/:month/:day',
          meta: {
            pageTitle: 'day'
          },
          component: DayTable
        },
        {
          path: 'week/:year/:month/:day',
          meta: {
            pageTitle: 'week'
          },
          component: WeekTable
        },
        {
          path: 'month/:year/:month/:day',
          meta: {
            pageTitle: 'month'
          },
          component: MonthTable
        },
        {
          path: 'year/:year/:month/:day',
          meta: {
            pageTitle: 'year'
          },
          component: YearTable
        }
      ]
    },
    {
      path: '*',
      meta: {
        pageTitle: 'notfound'
      },
      component: NotFound
    }
  ]
})
