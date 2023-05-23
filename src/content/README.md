# Updating methods

We use [MDsveX](https://mdsvex.pngwn.io/) to convert MD files into JSON, which will be served as REST endpoints.

To update a method, navigate to `src/lib/content/methods` where all the methods are categorized. Locate the respective method's Markdown (MD) file and make your edits. Once you're done, create a pull request for your changes. The pull request will be reviewed by one of the core contributors and potentially merged.

## Images

> **Note:** This applies only to method images. Other images can be added directly into HTML.

Method images are automatically served based on the slug. Therefore, ensure that the method's slug (in kebab-case) matches the name of the image file.

> For example, the method **Available product analysis** will have a kebab cased slug automatically generated as "available-product-analysis". So, the corresponding image file should be named **available-product-analysis.[ext]**.

To add method images, place them in the `/static/img/methods/[category]` folder. Make sure you put them in the correct folder and name them appropriately.

There are four types of images

1.  [method-name].jpg (w: 480, h: 720)
2.  [method-name].webp (w: 480, h: 720)
3.  /thumbnail/[method-name].jpg (w: 80, h: 120)
4.  /thumbnail/[method-name].webp (w: 80, h: 120)

Make sure you upload all four of these images. Although this approach may not be ideal, it currently suffices. There are some manual steps involved, but method changes are infrequent.

## Prepare image

Follow these steps for each of the four image types:

1.  Visit [https://squoosh.app/](https://squoosh.app/) (Image tool by Google) and drag your image into the tool.
2.  Underneath "Compress" in the dropdown menu, select either WebP and/or Browser JPEG.
3.  Keep the suggested/default compression settings provided by Squoosh.
4.  Toggle "Resize" but do not modify any other settings except for width and height. Set them to the suggested values mentioned above.
5.  Click on "Save."
6.  Upload or add the image to the appropriate category.
