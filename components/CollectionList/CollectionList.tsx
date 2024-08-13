import React from 'react'
import ComponentPreview from '@component/ComponentPreview'

interface ComponentData {
  title: string;
  dark: boolean;

}

interface CollectionListProps {
  componentsData: ComponentData[];
  componentContainer: string;
}

export default function CollectionList({ componentsData, componentContainer }: CollectionListProps) {
  return (
    <div className="not-prose mx-auto xl:max-w-[1348px]">
      <ul className="space-y-8 lg:space-y-12">
        {componentsData.map((componentData, index) => (
          <li key={index}>
            <ComponentPreview
              componentData={componentData}
              componentContainer={componentContainer}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
