<script>
export default {
  name: 'Post',
  async asyncData(context) {
    const { $content, params, app, route, redirect } = context;
    const slug = params.slug;
    const post = await $content(`${app.i18n.locale}/projects`, slug).fetch();
		console.log(`${app.i18n.locale}`);
		console.log("test");

    return {
      post,
    }
  },
}
</script>

<template>
  <main>
			<p>asdf</p>
    <ContentRenderer :value="post" />
  </main>
</template>
