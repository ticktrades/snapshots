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
		max-width: 500px;
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
		margin: 10px;
		font-size: 0.8rem;
	}
	.contact-twitter {
		background-image: url('/Twitter_Social_Icon_Circle_Color.png');
	}
	.contact-facebook {
		background-image: url('/f_logo_RGB-Blue_100.png');
	}
	.meta{
		text-align: right;
		font-size: 0.6rem;
	}
	.link-ticktrades {
		background-image: url('/android-chrome-512x512.png');
		display: inline-block;
		margin: 0;
		padding-left: 2rem;
		font-size: 0.6rem;
	}
</style>

<footer>
	<section class="social-media">
		<div class="contact-link contact-twitter">
			Follow 
			<a href="https://www.twitter.com/ticktrades_com">@ticktrades_com</a>
		</div>
		<div class="contact-link contact-facebook">
			Like
			<a href="https://www.facebook.com/ticktrades">
				facebook.com/ticktrades
			</a>
		</div>
	</section>
	<div class="meta">
		Report by
		<a
			class="contact-link link-ticktrades"
			href="https://www.ticktrades.com">
			Ticktrades
		</a>
	
	</div>
	<div class="meta">
		Generated on {date}
	</div>
</footer>
