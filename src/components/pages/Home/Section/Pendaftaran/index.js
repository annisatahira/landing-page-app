import React from 'react';
import {Button} from '../../../../Button';
import CardTraining from '../../../../Card/Training';
import Grid from '@material-ui/core/Grid';
import './style.css';

const PendaftaranSection = (data) => {
	return (
		<div className="container-pendaftaran">
			<div className="pendaftaran-wrapped">
				<h1 className="pendaftaran-title">
					Jarak dan Waktu Bukan Masalah Lagi
				</h1>
				<p className="pendaftaran-description-1">
					Arkademi menyediakan layanan kursus bersertifikat dengan cara belajar full online dari mobile app atau web. Tersedia puluhan kelas kursus berkualitas tinggi dalam berbagai kategori yang disediakan lembaga kursus resmi atau institusi. Sertifikat hard copy akan dikirim langsung ke alamat anda.
				</p>
				<p className="pendaftaran-description-2">
					Kini anda bisa mengikuti kursus yang anda butuhkan tanpa terikat tempat dan waktu dengan harga yang sangat terjangkau.
				</p>
				<Button
					buttonSize="btn--wide"
				>
					Daftar Sekarang
				</Button>
			</div>
			<div className="pendaftaran-options">
				<Grid container spacing={4}>
					{data.trainings.map((item) => {

						return (
							<Grid key={item.id} item lg={6}>
								<CardTraining
									image={item.image}
									alt={item.alt}
									title={item.title}
									description={item.description}
									buttonTitle={item.buttonTitle}
								/>
							</Grid>
						)
					})}
				</Grid>
			</div>
		</div>
	)
};

export default PendaftaranSection;