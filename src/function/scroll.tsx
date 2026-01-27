export const scrollToSection = (id: string) => {
  const section = document.getElementById(id)
  if (!section) return

  const headerOffset = 90 // altura do header
  const elementPosition = section.getBoundingClientRect().top
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  })
}
