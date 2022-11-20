import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const useKeyPresses = () => {
  const navigate = useNavigate()
  useEffect(() => {
    document.addEventListener("keydown", (ev) => {
      if (ev.key === "Escape") {
        navigate("/")
      }
    })
  }, [navigate])
  return
}
