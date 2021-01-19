import React from 'react';
import Grid from '@material-ui/core/Grid';
import './style.css';
import { logoFooter } from '../../utils/assets';

const listAlat = {
	items : [
	{
		id: 1,
		name : "Kalkulator Pajak Karyawan"
	},
	{
		id: 2,
		name : "Kalkulator Nilai Usaha"
	},
	{
		id: 3,
		name : "Tes Teknik Kewirausahaan"
	},
	{
		id: 4,
		name : "Diagnosa Usaha"
	},
	{
		id: 5,
		name : "FAQ"
	},
	{
		id: 6,
		name : "Karir"
	},
	{
		id: 7,
		name : "Privecy Policy"
	},
	]
};

const Footer = () => {
	return (
		<div className="container-footer">
			<div className="footer-wrapper">
				<Grid container spacing={4}>
					<Grid item md={7}>
						<img className="footer-logo" src={logoFooter} alt="Arkademi"/>
						<p className="footer-description">
							Arkademi adalah massive open online course (MOOC) platform karya anak bangsa Indonesia. Pembelajaran di Arkademi dikhususkan untuk pembelajaran berbasis keahlian yang diantarkan melalui kelas belajar dan kursus online melalui aplikasi Arkademi berbasis mobile app dan web. Di Arkademi setiap individu dan lembaga kursus dapat membuka dan mengkomersialkan kelas onlinenya dan menjangkau siswa dari seluruh Indonesia.
						</p>
						<h2 className="footer-highlight">Akselerator</h2>
						<p className="footer-highlight-description">
							Arkademi adalah bagian program inkubasi dan akselerator dari perusahaan top-level dunia: SOSV MOX (Mobile Only Accelerator), Amazon Web Service (Edstart Program) dan Y Combinator (Startup School) yang dipilih dari tech startup edukasi terbaik dunia.
						</p>
						<div className="footer-featured">
							<img className="footer-featured-logo" src="/images/footer-featured.svg" alt="" />
						</div>
					</Grid>
					<Grid item md={2}>
						<h1 className="footer-title">Alat</h1>
						<ul className="alat-list">
							{listAlat.items.map((el) => {
								return (
									<li key={el.id} className="alat-item">{el.name}</li>
								)
							})}
						</ul>
					</Grid>
					<Grid item md={3}>
						<img className="footer-ic-comment" src="/icons/comment.svg" alt="" />
						<h1 className="footer-title">Arkademi Mobile App</h1>
						<p className="footer-app-desc">Lewat aplikasi Android dan iOs Arkademi.</p>
						<img src="/icons/google-play.svg" alt="google-play" />
						<div className="app-store">
							<img src="/icons/app-store.svg" alt="app-store" />
						</div>
						<div className="footer-featured">
							<h1 className="footer-info">Terdaftar Resmi di</h1>
							<img src="/icons/kominfo.svg" alt="" />
						</div>
					</Grid>
				</Grid>
				<hr />
					<div className="footer-featured-bank">
						<Grid container>
						<Grid item sm={12}>
							<h1 className="footer-featured-bank-title">Metode Pembayaran</h1>
						</Grid>
						<Grid sm={6} md={12} lg={2}>
							<img src="/icons/bank1.svg" alt="" />
						</Grid>
						<Grid item sm={6} md={12} lg={2}>
							<img className="footer-bank-2" src="/icons/bank2.svg" alt="" />
						</Grid>
						<Grid item sm={6} md={12} lg={2}>
							<img src="/icons/bank3.svg" alt="" />
						</Grid>
						<Grid item sm={6} md={12} lg={2}>
							<img src="/icons/bank4.svg" alt="" />
						</Grid>
						<Grid item sm={6} md={12} lg={2}>
							<img src="/icons/bank5.svg" alt="" />
						</Grid>
						<Grid item sm={6} md={12} lg={1}>
							<img src="/icons/bank6.svg" alt="" />
						</Grid>
						<Grid item sm={6} md={12} lg={1}>
							<img src="/icons/bank7.svg" alt="" />
						</Grid>
					</Grid>
				</div>
			</div>
			<div className="footer-watermark">
				<div className="footer-watermark-wrapper">
					<Grid container>
						<Grid item sm={8}>
							<h1 className="footer-watermark-title">© 2017-2020 PT Arkademi Daya Indonesia</h1>
						</Grid>
						<Grid item sm={2}>
							<h1 className="footer-watermark-title">Ketentuan Layanan</h1>
						</Grid>
						<Grid item sm={2}>
							<h1 className="footer-watermark-title">Kontak</h1>
						</Grid>
				</Grid>
				</div>
			</div>
		</div>
	)
};

export default Footer;