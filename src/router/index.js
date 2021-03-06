import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: () => import('components/index/index'),
      redirect: '/index/recommend',
      children: [
        {
          path: 'recommend',
          component: () => import('components/recommend/recommend'),
          meta: {
            tab: 1
          },
          children: [
            {
              path: '/recommend/music-list',
              name: 'MusicList',
              component: () => import('components/music-list/music-list')
            },
            {
              path: '/recommend/new-song',
              name: 'NewSong',
              component: () => import('components/new-song/new-song')
            }
          ]
        },
        {
          path: 'my-friend',
          component: () => import('components/my-friend/my-friend'),
          meta: {
            tab: 2
          }
        },
        {
          path: 'broadcast',
          component: () => import('components/broadcast/broadcast'),
          meta: {
            tab: 3
          }
        }
      ]
    },
    {
      path: '/',
      redirect: '/index/recommend'
    }
  ]
})
