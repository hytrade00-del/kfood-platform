import React from 'react';
import recipesData from '../../../data/recipes.json';
import RecipeDetail from '../../../components/RecipeDetail';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const { id } = await params;
  const recipe = recipesData.find(r => r.id === id);

  if (!recipe) return {};

  const title = `${recipe.title} Recipe | K-Food Global`;
  const description = `Learn how to make authentic ${recipe.title}. Step-by-step recipe with ingredient substitutes for home cooks worldwide.`;
  const url = `https://www.kfood-platform.com/recipe/${id}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: recipe.image,
          width: 800,
          height: 600,
          alt: recipe.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [recipe.image],
    },
    alternates: {
      canonical: url,
    },
  };
}

export async function generateStaticParams() {
  return recipesData.map((recipe) => ({
    id: recipe.id,
  }));
}

export default async function RecipePage({ params }) {
  const { id } = await params;
  const recipeIndex = recipesData.findIndex(r => r.id === id);
  const recipe = recipesData[recipeIndex];

  if (!recipe) {
    notFound();
  }

  return <RecipeDetail recipe={recipe} recipeIndex={recipeIndex} />;
}
