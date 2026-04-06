'use client';
import { useEffect } from 'react';

const DisqusComments = ({ recipeId }) => {
  useEffect(() => {
    const pageUrl = `https://www.kfood-platform.com/recipe/${recipeId}`;
    const pageIdentifier = recipeId;

    if (window.DISQUS) {
      window.DISQUS.reset({
        reload: true,
        config: function () {
          this.page.url = pageUrl;
          this.page.identifier = pageIdentifier;
        }
      });
    } else {
      window.disqus_config = function () {
        this.page.url = pageUrl;
        this.page.identifier = pageIdentifier;
      };
      const d = document, s = d.createElement('script');
      s.src = 'https://k-food-global.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
    }
  }, [recipeId]);

  return (
    <>
      <div id="disqus_thread"></div>
      <noscript>
        Please enable JavaScript to view the{' '}
        <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a>
      </noscript>
    </>
  );
};

export default DisqusComments;
