import { ref } from 'vue'

const linksState = ref([
  {
    name: '白頭翁的特性',
    active: true,
  },
  {
    name: '白頭翁的故事',
    active: false,
  },
  {
    name: '白頭翁的美照',
    active: false,
  },
  {
    name: '白頭翁的危機',
    active: false,
  },
])

const setActive = (link: { name: string; active: boolean }) => {
  linksState.value = linksState.value.map(l => {
    if (l.name === link.name) l.active = true
    else l.active = false
    return l
  })
}

export { linksState, setActive }
