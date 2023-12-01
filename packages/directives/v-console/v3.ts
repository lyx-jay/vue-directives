export default {
  mounted(binding: { value: any; oldValue: any; }) {
    const { value, oldValue } = binding
    console.log('[mounted]', 'new:', value, 'old', oldValue)
  },
  updated(binding: { value: any; oldValue: any }) {
    const { value, oldValue } = binding
    console.log('[updated]', 'new:', value, 'old', oldValue)
  }
}