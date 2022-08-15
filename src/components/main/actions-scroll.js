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
    const nameLinkItem = linkItem.href.split("/")[4].split("#")[1]

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
  const linkItems = document.getElementsByClassName("nav__link")
  return [...linkItems]
}
