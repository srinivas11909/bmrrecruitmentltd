import Link from "next/link"

const NotFound = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <h2 className="font-semibold text-gray-700 mr-1">Not Found</h2>
      <p className="font-semibold text-gray-700">Sorry, the page you are looking for does not exist.</p>
      <Link href="/" className="text-indigo-600 font-semibold">Home</Link>
    </div>
  )
}

export default NotFound