import React from 'react'

type Props = {}

export default async function ProductReview  ({params}:{params :Promise<{productId: string;reviewId : string}>}) {

    const {productId,reviewId} = await params
  return (
   <div>
     <h1>Review {reviewId} for product of {productId}</h1>
   </div>
  )
}