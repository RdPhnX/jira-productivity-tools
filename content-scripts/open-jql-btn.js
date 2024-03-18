window.addEventListener('load', main, false);

function main(evt) {
  const issueLinksElement = document.querySelector('label[for="issue-link-search"]');
  if (!issueLinksElement) {
    console.log('No Issue links element found.');
    return;
  }
  const linkingModule = issueLinksElement.parentElement.parentElement;
  const linkLists = linkingModule.querySelectorAll('div[data-testid="issue.views.issue-base.content.issue-links.group-container"]');
  const currentIssueKeyElement = document.querySelector('a[data-testid="issue.views.issue-base.foundation.breadcrumbs.current-issue.item"]');
  const currentIssueKey = currentIssueKeyElement?.textContent.trim();
  const allLinksButton = document.createElement("button");
  allLinksButton.textContent = "Open JQL";
  allLinksButton.style.marginLeft = "20px";
  const searchUrl = `${window.location.origin}/issues/?jql=issue in linkedIssues(${currentIssueKey})`;
  allLinksButton.addEventListener("click", () => window.open(searchUrl, "_blank"));
  issueLinksElement.appendChild(allLinksButton);
  Array.from(linkLists)
    .forEach(linkList => {
      const linkListHeader = linkList.querySelector('h3');
      const linkListButton = document.createElement("button");
      linkListButton.textContent = "Open JQL";
      linkListButton.style.marginLeft = "20px";
      const searchUrl = `${window.location.origin}/issues/?jql=issue in linkedIssues(${currentIssueKey}, "${linkListHeader.textContent.trim()}")`;
      linkListButton.addEventListener("click", () => window.open(searchUrl, "_blank"));
      linkListHeader.appendChild(linkListButton);
    })
}