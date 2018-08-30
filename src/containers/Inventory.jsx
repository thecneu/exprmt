import React from 'react'
import ModelsDataProvider from 'data-providers/Models'
import DealersDataProvider from 'data-providers/Dealers'
import ZipDataProvider from 'data-providers/Zip'
import PageDataProvider from 'data-providers/Page'
import InventoryProvider from 'providers/Inventory'

const InventoryContainer = ({ children, router, params }) => (
  <ZipDataProvider>
    {(zip) => (
      <ModelsDataProvider>
        {(modelsData) => {
          const currentModel = modelsData.carModels.find(model => params.model === model.slug)
          return (
            <DealersDataProvider currentModel={currentModel} zip={zip}>
              {(dealers) => (
                <PageDataProvider>
                  {(pageData) => (
                    <InventoryProvider router={router} models={modelsData.carModels} currentModel={currentModel} dealers={dealers} pageData={pageData}>
                      {children}
                    </InventoryProvider>
                  )}
                </PageDataProvider>
              )}
            </DealersDataProvider>
          )
        }}
      </ModelsDataProvider>
    )}
  </ZipDataProvider>
)

export default InventoryContainer