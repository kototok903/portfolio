import { Badge } from '@/components/ui/badge'
import { tagsData } from '@/lib/tags'
import Image from "next/image";

export default function TagBadge({ tag }: { tag: string }) {
  if (!tagsData[tag]) return

  const { name, icon } = tagsData[tag]

  return (
    <Badge variant="outline">
      {icon && (
        <Image src={icon} alt={`${name} icon`} width={20} height={20} />
      )}
      {name}
    </Badge>
  )
}
