import React from 'react'
import TagBadge from '@/components/tag-badge'

export default function Tags({ tags, className }: { tags: string[], className: string }) {
  //tags.sort()

  return (
    <div className={`flex flex-row flex-wrap gap-1 ${className}`}>
        {tags.map((tag: string, index: number) => (
            <TagBadge key={index} tag={tag} />
        ))}
    </div>
  )
}
