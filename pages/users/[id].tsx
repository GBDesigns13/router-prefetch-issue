import { useRouter } from "next/router"

export default function User() {
  const router = useRouter();
  const prefetchOnHover = () => {
    // it doesn't work
    router.prefetch('/users/2')
  }
  return (
    <div>
      <button onMouseOver={prefetchOnHover} onClick={() => router.push("/users/2")}>
        prefetch user 2
      </button>
    </div>
  )
}