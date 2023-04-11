import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return(
        <main>
            <div>
                <h1 class="text-center font-inter font-bold">Hi</h1>
            </div>
        </main>
    )
}