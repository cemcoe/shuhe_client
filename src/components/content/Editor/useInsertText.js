// ref https://github.com/luosijie/Front-end-Blog/blob/master/%5B016%5D%20Vue%E5%86%99%E4%B8%80%E4%B8%AAMarkdown%E7%BC%96%E8%BE%91%E5%99%A8.md
function useInsertText(dom, string) {
  if (document.execCommand('insertText', false, string)) {
    return
  } else {
    let start = dom.selectionStart
    let end = dom.selectionEnd
    dom.value = dom.value.substring(0, start) + string + dom.value.substring(end, dom.value.length)
    dom.selectionStart = start + string.length;
    dom.selectionEnd = start + string.length;
    dom.focus()
  }
}
export default useInsertText
