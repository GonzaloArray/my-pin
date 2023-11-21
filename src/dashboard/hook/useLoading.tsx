import { useState } from "react"

export const useLoading = () => {
  const [loading, setLoading] = useState(false)
  const [sendLoading, setSendLoading] = useState(false)

  const onLoading = () => {
    setLoading(() => true)
    return
  }

  const onFinallyLoading = () => {
    setLoading(() => false)
    return
  }

  const submitEventLoading = () => {
    setSendLoading(true)
  }

  const submitEventFinallyLoading = () => {
    setSendLoading(false)
  }

  return {
    loading,
    sendLoading,
    onFinallyLoading,
    onLoading,
    submitEventLoading,
    submitEventFinallyLoading
  }
}
