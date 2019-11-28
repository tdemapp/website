<script>
export default {
	// Redirect all other traffic back to homepage
	asyncData({ error, req, redirect }) {
		if (req && req.error) {
			return error({ message: req.error.message, statusCode: req.error.status });
		}
		redirect('/');
	},
};
</script>
