import { Badge } from "./Badge"

export const Stack = () => {
  return (
    <div className='lg:w-2/3'>
      <h2 className="font-bold">Stack Frontend: </h2>
      <div className="flex gap-4 mt-3 flex-wrap">
        <Badge>
          # React
        </Badge>
        <Badge>
          # Next.js
        </Badge>
        <Badge>
          # JavaScript
        </Badge>
        <Badge>
          # TypeScript
        </Badge>
        <Badge>
          # Firebase9
        </Badge>
        <Badge>
          # Redux
        </Badge>
        <Badge>
          # Zustand
        </Badge>
        <Badge>
          # Tailwind
        </Badge>
      </div>
    </div>
  )
}
