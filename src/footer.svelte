<script>
	const date = new Date().toUTCString();
</script>

<style>
	a {
		color: rgb(237, 37, 77);
	}

	footer {
		margin: 50px auto 20px;
		width: 100%;
		max-width: 650px;
	}

	.social-media{
		display: flex;
		justify-content: space-between;
	}
	.contact-link {
		background: no-repeat left center;
		line-height: 2rem;
		background-size: contain;
		padding-left: 2.5rem;
		margin: 20px;
		font-size: 0.8rem;
	}
	.contact-twitter {
		background-image: url('/Twitter_Social_Icon_Circle_Color.png');
	}
	.contact-facebook {
		background-image: url('/f_logo_RGB-Blue_100.png');
	}
	.meta{
		text-align: center;
	}
	.link-ticktrades {
		background-image: url('/android-chrome-512x512.png');
		display: inline-block;
		margin: 0;
		padding-left: 2rem;
	}
</style>

<footer>
	<section class="social-media">
		<div class="contact-link contact-twitter">
			Follow us on twitter
			<a href="https://www.twitter.com/ticktrades_com">@ticktrades_com</a>
		</div>
		<div class="contact-link contact-facebook">
			Like us on facebook
			<a href="https://www.facebook.com/ticktrades">
				facebook.com/ticktrades
			</a>
		</div>
	</section>
	<div class="meta">
		Report generated and on {date} &copy; by
		<a
			class="contact-link link-ticktrades"
			href="https://www.ticktrades.com">
			Ticktrades
		</a>
	</div>
</footer>
