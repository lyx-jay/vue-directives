export default {
  mounted(el, binding) {
    const { value, oldValue } = binding
    console.log('mounted', `new: ${value}`, `old: ${oldValue}`)
  },
  updated(el, binding) {
    const { value, oldValue } = binding
    console.log('updated', `new: ${value}`, `old: ${oldValue}`)
  }
}