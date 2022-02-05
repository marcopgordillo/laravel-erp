import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { createAcl, defineAclRules } from 'vue-simple-acl'
import { useAuthStore } from '@/js/store'
import router from '@/js/router'

const rawRules = [
  'roles-list', 'roles-create', 'roles-show', 'roles-update', 'roles-delete',
];

const rules = () => defineAclRules(setRule => {
  const { user } = storeRefs()
  setRule('users-list', (user) => user?.permissions.includes('users-list'))
  setRule('users-create', (user) => user?.permissions.includes('users-create'))
  setRule('users-show', (user, _user) => user?.permissions.includes('users-list') || user?.id === _user?.id)
  setRule('users-update', (user, _user) => {
    return user?.permissions.includes('users-update') || user?.id === _user?.id
  })
  setRule('users-delete', (user, _user) => user?.permissions.includes('users-delete') || user?.id === _user?.id)
  rawRules.forEach(rule => setRule(rule, (user) => user?.permissions.includes(rule)));
})

export default createAcl({
  user: () => storeRefs().user,
  rules,
  router,
  onDeniedRoute: { name: 'Unauthorized', replace: true },
})

function storeRefs() {
    const storeAuth = useAuthStore()
    const { user } = storeToRefs(storeAuth)
    return { user }
}
