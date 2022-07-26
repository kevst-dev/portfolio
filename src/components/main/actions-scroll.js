export const scrollEvent = () => {
  getSectionInViewport()
}

const getSectionInViewport = () => {
  const idsSections = ["home", "about", "skills", "work", "contact"]

  idsSections.map((idSection) => {
    const elementSection = document.getElementById(idSection)

    if (isInViewport(elementSection)) {
      enableLinkItem(idSection)
    }
  })
}

const isExist = (element) => ((element != null))

const isInViewport = (element) => {
  if (isExist(element)) {
    const distance = element.getBoundingClientRect()
    return (
      (distance.top < 60) && (distance.top >= 0)
    )
  } else { return false }
}

// For navItems
const enableLinkItem = (nameItem) => {
  const linksItems = getLinksItems()
  disableLinksItems(linksItems)

  linksItems.map((linkItem) => {
    const nameLinkItem = linkItem.href.split("/")[3].split("#")[1]
    if (nameItem === nameLinkItem) {
      linkItem.classList.add('link__active')
    }
  })
}

const disableLinksItems = (linksItems) => {
  linksItems.map((linkItem) => {
    linkItem.classList.remove('link__active')
  })
}

const getLinksItems = () => {
  const firstItem = 1
  const lastItem = 5

  const navItems = document
                    .getElementsByClassName("nav-header__menu")[0]
                    .childNodes
  let linksItems = []

  for (let i=firstItem; i<=lastItem; i++) {
    linksItems.push(navItems[i].childNodes[0])
  }
  return linksItems
}
