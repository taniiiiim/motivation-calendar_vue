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
import NotFoundView from './components/templates/NotFoundView.vue'
import { MIN_YEAR, MAX_YEAR, MIN_MONTH, MAX_MONTH, MIN_DAY } from './constant'

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
          component: DayTable,
          beforeEnter: function(to, from, next) {
            let max_date = new Date(to.params.year, to.params.month, 0);
            const MAX_DAY = max_date.getDate();
            if (to.params.year.match(/\D/) || to.params.month.match(/\D/) || to.params.day.match(/\D/)) {
              next('/not-found');
            } else if (parseInt(to.params.year) < MIN_YEAR) {
              next(`/calendar/day/${MIN_YEAR}/${to.params.month}/${to.params.day}`);
            } else if (parseInt(to.params.year) > MAX_YEAR ) {
              next(`/calendar/day/${MAX_YEAR}/${to.params.month}/${to.params.day}`);
            } else if (parseInt(to.params.month) < MIN_MONTH ) {
              next(`/calendar/day/${to.params.year}/${MIN_MONTH}/${to.params.day}`);
            } else if (parseInt(to.params.month) > MAX_MONTH ) {
              next(`/calendar/day/${to.params.year}/${MAX_MONTH}/${to.params.day}`);
            } else if (parseInt(to.params.day) < MIN_DAY ) {
              next(`/calendar/day/${to.params.year}/${to.params.month}/${MIN_DAY}`);
            } else if (parseInt(to.params.day) > MAX_DAY ) {
              next(`/calendar/day/${to.params.year}/${to.params.month}/${MAX_DAY}`);
            } else {
              next();
            }
          }
        },
        {
          path: 'week/:year/:month/:day',
          meta: {
            pageTitle: 'week'
          },
          component: WeekTable,
          beforeEnter: function(to, from, next) {
            let max_date = new Date(to.params.year, to.params.month, 0);
            const MAX_DAY = max_date.getDate();
            if (to.params.year.match(/\D/) || to.params.month.match(/\D/) || to.params.day.match(/\D/)) {
              next('/not-found');
            } else if (parseInt(to.params.year) < MIN_YEAR) {
              next(`/calendar/week/${MIN_YEAR}/${to.params.month}/${to.params.day}`);
            } else if (parseInt(to.params.year) > MAX_YEAR ) {
              next(`/calendar/week/${MAX_YEAR}/${to.params.month}/${to.params.day}`);
            } else if (parseInt(to.params.month) < MIN_MONTH ) {
              next(`/calendar/week/${to.params.year}/${MIN_MONTH}/${to.params.day}`);
            } else if (parseInt(to.params.month) > MAX_MONTH ) {
              next(`/calendar/week/${to.params.year}/${MAX_MONTH}/${to.params.day}`);
            } else if (parseInt(to.params.day) < MIN_DAY ) {
              next(`/calendar/week/${to.params.year}/${to.params.month}/${MIN_DAY}`);
            } else if (parseInt(to.params.day) > MAX_DAY ) {
              next(`/calendar/week/${to.params.year}/${to.params.month}/${MAX_DAY}`);
            } else {
              next();
            }
          }
        },
        {
          path: 'month/:year/:month/:day',
          meta: {
            pageTitle: 'month'
          },
          component: MonthTable,
          beforeEnter: function(to, from, next) {
            let max_date = new Date(to.params.year, to.params.month, 0);
            const MAX_DAY = max_date.getDate();
            if (to.params.year.match(/\D/) || to.params.month.match(/\D/) || to.params.day.match(/\D/)) {
              next('/not-found');
            } else if (parseInt(to.params.year) < MIN_YEAR) {
              next(`/calendar/month/${MIN_YEAR}/${to.params.month}/${to.params.day}`);
            } else if (parseInt(to.params.year) > MAX_YEAR ) {
              next(`/calendar/month/${MAX_YEAR}/${to.params.month}/${to.params.day}`);
            } else if (parseInt(to.params.month) < MIN_MONTH ) {
              next(`/calendar/month/${to.params.year}/${MIN_MONTH}/${to.params.day}`);
            } else if (parseInt(to.params.month) > MAX_MONTH ) {
              next(`/calendar/month/${to.params.year}/${MAX_MONTH}/${to.params.day}`);
            } else if (parseInt(to.params.day) < MIN_DAY ) {
              next(`/calendar/month/${to.params.year}/${to.params.month}/${MIN_DAY}`);
            } else if (parseInt(to.params.day) > MAX_DAY ) {
              next(`/calendar/month/${to.params.year}/${to.params.month}/${MAX_DAY}`);
            } else {
              next();
            }
          }
        },
        {
          path: 'year/:year/:month/:day',
          meta: {
            pageTitle: 'year'
          },
          component: YearTable,
          beforeEnter: function(to, from, next) {
            let max_date = new Date(to.params.year, to.params.month, 0);
            const MAX_DAY = max_date.getDate();
            if (to.params.year.match(/\D/) || to.params.month.match(/\D/) || to.params.day.match(/\D/)) {
              next('/not-found');
            } else if (parseInt(to.params.year) < MIN_YEAR) {
              next(`/calendar/year/${MIN_YEAR}/${to.params.month}/${to.params.day}`);
            } else if (parseInt(to.params.year) > MAX_YEAR ) {
              next(`/calendar/year/${MAX_YEAR}/${to.params.month}/${to.params.day}`);
            } else if (parseInt(to.params.month) < MIN_MONTH ) {
              next(`/calendar/year/${to.params.year}/${MIN_MONTH}/${to.params.day}`);
            } else if (parseInt(to.params.month) > MAX_MONTH ) {
              next(`/calendar/year/${to.params.year}/${MAX_MONTH}/${to.params.day}`);
            } else if (parseInt(to.params.day) < MIN_DAY ) {
              next(`/calendar/year/${to.params.year}/${to.params.month}/${MIN_DAY}`);
            } else if (parseInt(to.params.day) > MAX_DAY ) {
              next(`/calendar/year/${to.params.year}/${to.params.month}/${MAX_DAY}`);
            } else {
              next();
            }
          }
        }
      ]
    },
    {
      path: '*',
      meta: {
        pageTitle: '/not-found'
      },
      component: NotFoundView
    }
  ]
})
