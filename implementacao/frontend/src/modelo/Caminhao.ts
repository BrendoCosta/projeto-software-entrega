class Caminhao {

	private vin: string;
	private placa: string;
	private motorista_id: string;
	private estado: string;

	public getEstado(): EstadoCaminhao { return new EstadoCaminhao() }

	public setEstado(estado: EstadoCaminhao): void {}

}
