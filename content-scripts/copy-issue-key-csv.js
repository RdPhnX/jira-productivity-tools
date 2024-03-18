function getIssueKeysCSV() {
  const issueKeys = document.querySelectorAll('a[data-component-selector="jira-native-issue-table-issue-key"]');
  return Array.from(issueKeys)
    .map(i => i.textContent)
    .join(',');
}

function copyToClipboard(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

function copyColumnToClipboard() {
  const csvData = getIssueKeysCSV();
  copyToClipboard(csvData);
  alert('Issue keys CSV are copied to the clipboard.');
}

copyColumnToClipboard();