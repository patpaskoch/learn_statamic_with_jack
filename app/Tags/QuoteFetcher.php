<?php

namespace App\Tags;

use Statamic\Tags\Tags;

class QuoteFetcher extends Tags
{
    /**
     * The {{ quote_fetcher }} tag.
     *
     * @return string|array
     */
    public function index()
    {
        $quotes = [
                "There’s only one thing I hate more than lying: skim milk. Which is water that’s lying about being milk.",
                "Dear frozen yogurt, you are the celery of desserts. Be ice cream, or be nothing.",
                "When I eat, it is the food that is scared.",
                "Don’t start chasing applause and acclaim. That way lies madness.",
                "If there were more food and fewer people, this would be a perfect party."
        ];

        return $quotes[array_rand($quotes)];
    }    
}
