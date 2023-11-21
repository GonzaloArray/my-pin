interface Props{
  loading: boolean
}

export const BtnSubmit = ({loading}: Props) => {
  return (
    <button
      type="submit"
      className={`w-[400px] text-2xl h-[100px] border border-white-100 py-3 px-10 hover:bg-white-100 ${loading ? "bg-white-100 cursor-not-allowed" : ""}`}
      disabled={loading}
    >
      {loading ? 'Loading...' : 'Save Profile'}
    </button>
  )
}
