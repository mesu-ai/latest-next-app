/* eslint-disable prettier/prettier */

const page = ({ params }) => {
  return (
    <div className="absolute top-1/3 bottom-1/4 left-20 right-20 bg-sky-400 z-20 rounded-xl shadow-lg">
      modal page {params.slug}
    </div>
  )
}
export default page