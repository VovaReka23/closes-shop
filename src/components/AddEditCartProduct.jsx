import React, { useState } from 'react';

const AddEditCartProduct = ({ onEditProduct, onClick, defValue  }) => {
	const [form, setForm] = useState({
		id: defValue.id,
		imageUrl: {
			value:  defValue.imageUrl,
			error: null,
		}, 
		name: {
			value: defValue.name,
			error: null,
		}, 
		description: {
			value: defValue.description,
			error: null,
		}, 
		price: {
			value: defValue.price,
			error: null,
		}, 
		count: {
			value: defValue.count,
			error: null,
		}, 
		weight: {
			value: defValue.weight,
			error: null,
		}, 
		width: {
			value: defValue.size.width,
			error: null,
		}, 
		height: {
			value: defValue.size.height,
			error: null,
		}, 
	});

	const onInfoChangeHandler = (event) => {
		const { value, name } = event.target;

		setForm((form) => ({
			...form,
			[name]: {
				value,
				error: null,
			},
		}));
	};

	const onNumberChangeHandler = (event) => {
		const { value, name } = event.target;
		if (/^\d+$/.test(value)) {
			setForm((form) => ({
				...form,
				[name]: {
					value,
					error: null,
				},
			}));
		}
	};

	const onImgChangeHandler = (event) => {
		if(event.target.files.length) {
			handleFiles(event.target.files);
		}
	};
	const handleFiles = (files) => {
		const reader = new FileReader();
		const extension = files[0].name.split('.').slice(-1).join('');
		if(files.length > 1 || (extension !== 'jpg' && extension !== 'png')) return;
		reader.readAsDataURL(files[0]);
		reader.addEventListener("load", function () {
			const data = reader.result

			setForm((form) => ({
					...form,
					imageUrl: {
						value: data,
						error: null,
					},
				}));
		}, false);
	}

	const addProduct = (e) => {
		e.preventDefault();
		const keys = Object.keys(form);
		const newObj = {}
		keys.forEach((key) => {
			newObj[key] = form[key].value 
			if (form[key].value === '') {
				setForm((form) => ({
					...form,
					[key]: {
						value: '',
						error: "This field is required"
					},
				}));
			} 
		})
		const arr = Object.values(newObj);
		const valid = arr.every((item) => item !== '');
		if (!valid) {
			return false;
		}
	
		onEditProduct({
			name: form.name.value,
			description: form.description.value,
			price: form.price.value,
			imageUrl: form.imageUrl.value,
			count: form.count.value,
			weight: form.weight.value,
			width: form.width.value,
			height: form.weight.value,
			id: defValue.id,
		});
		
	};

	const handleKeyUp = (event) => {
		if (event.keyCode === 13) {
			addProduct();
		}
	};

	return (
		<div className="product__add-field">
			<form action='#'>
				<div className="input-field">
					<input
						name="img"
						accept=".jpg, .png"
						onChange={onImgChangeHandler}
						type="file"
						placeholder="img"
						required
					/>
					{ form.name.error && (
						<span className="error">{form.name.error}</span>
					)}
				</div>
				<div className="input-field">
					<input
						value={form.name.value}
						name="name"
						onChange={onInfoChangeHandler}
						type="text"
						placeholder="name"
						required
					/>
					{ form.name.error && (
						<span className="error">{form.name.error}</span>
					)}
				</div>
				<div className="input-field">
					<input
						value={form.description.value}
						name="description"
						onChange={onInfoChangeHandler}
						type="text"
						placeholder="description "
						required
					/>
					{ form.name.error && (
						<span className="error">{form.name.error}</span>
					)}
				</div>
				<div className="input-field">
					<input
						value={form.count.value}
						name="count"
						onChange={onNumberChangeHandler}
						type="text"
						placeholder="count"
						required
					/>
					{ form.name.error && (
						<span className="error">{form.name.error}</span>
					)}
				</div>
				<div className="input-field">
					<input
						value={form.weight.value}
						name="weight"
						onChange={onNumberChangeHandler}
						type="text"
						placeholder="weight"
						required
					/>
					{ form.name.error && (
						<span className="error">{form.name.error}</span>
					)}
				</div>
				<div className="input-field">
					<input
						value={form.width.value}
						name="width"
						onChange={onNumberChangeHandler}
						type="width"
						placeholder="width"
						required
					/>
					{ form.name.error && (
						<span className="error">{form.name.error}</span>
					)}
				</div>
				<div className="input-field">
					<input
						value={form.height.value}
						name="height"
						onChange={onNumberChangeHandler}
						type="height"
						placeholder="height"
						required
					/>
					{ form.name.error && (
						<span className="error">{form.name.error}</span>
					)}
				</div>
				<div className="input-field">
					<input
					value={form.price.value}
					name="price"
					onChange={onNumberChangeHandler}
					type="text"
					placeholder="price"
					required
					/>
					{ form.name.error && (
						<span className="error">{form.name.error}</span>
					)}	
				</div>
				<button type='submit' onClick={addProduct} onKeyUp={handleKeyUp} className="product__add-field-button">
				Add product</button>
				<button type='button' onClick={onClick} className="product__add-field-button">
				Close</button>
			</form>
		</div>
	);
};

export default AddEditCartProduct;
