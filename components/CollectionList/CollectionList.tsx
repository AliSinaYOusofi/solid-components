import React from 'react'
import ComponentCard from '../Global/ComponentsCard';

interface ComponentData {
  title: string;
  description: string;
  icon: React.ReactNode
}

interface CollectionListProps {
  componentsData: ComponentData[];
}

export default function CollectionList({ componentsData }: CollectionListProps) {
  return (
    <div className="not-prose mx-auto xl:max-w-[1348px] ">
      <ul className="flex justify-center items-center flex-wrap gap-y-4 gap-x-4">
        {
          componentsData.map((componentData, index) => (
            <li key={index}>
              <ComponentCard
                icon={componentData.icon}
                title={componentData.title}
                description={componentData.description}
              />
            </li>
          ))
        }
      </ul>
    </div>
  )
}
