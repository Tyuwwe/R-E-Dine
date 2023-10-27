document.getElementById('toggle-dark-mode').addEventListener('click', async () => {
  const isDarkMode = await window.darkMode.toggle()
  document.getElementById('theme-source').innerHTML = isDarkMode ? '当前模式：深色模式' : '当前模式：浅色模式'
})
  
document.getElementById('reset-to-system').addEventListener('click', async () => {
  await window.darkMode.system()
  document.getElementById('theme-source').innerHTML = '当前模式：跟随系统'
})

document.getElementById('open-github').addEventListener('click', () => {
  window.REDAPI.open_github();
})