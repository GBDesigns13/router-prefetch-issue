import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const prefetchOnHover = () => {
    // it works
    router.prefetch('/users/1')
  }
  return (
    <>
      <button onMouseOver={prefetchOnHover} onClick={() => router.push("/users/1")}>
        prefetch
      </button>
    </>
  )
}