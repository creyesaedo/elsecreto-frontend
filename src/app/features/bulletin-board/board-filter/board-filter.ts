import { Component, EventEmitter, Input, Output, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Service } from '../../../shared/models/service.model';

export interface FilterCriteria {
  serviceIds: string[];
  nationality: 'all' | 'national' | 'foreign';
  servesTo: string[];
  gender: string[];
  sortBy: 'none' | 'age' | 'likes';
}

@Component({
  selector: 'app-board-filter',
  imports: [CommonModule, FormsModule],
  templateUrl: './board-filter.html',
  styleUrl: './board-filter.css',
  standalone: true
})
export class BoardFilter {
  @Input() services: Service[] = [];
  @Output() filterChange = new EventEmitter<FilterCriteria>();
  @ViewChild('serviceFilter') serviceFilterRef!: ElementRef;
  @ViewChild('servesToFilter') servesToFilterRef!: ElementRef;
  @ViewChild('nationalityFilter') nationalityFilterRef!: ElementRef;
  @ViewChild('genderFilter') genderFilterRef!: ElementRef;
  @ViewChild('sortByFilter') sortByFilterRef!: ElementRef;

  selectedServiceIds: Set<string> = new Set();
  nationality: 'all' | 'national' | 'foreign' = 'all';

  nationalityOptions = [
    { value: 'national', label: 'Chilena', checked: false },
    { value: 'foreign', label: 'Extranjera', checked: false }
  ];

  genderOptions = [
    { value: 'male', label: 'Hombre', checked: false },
    { value: 'female', label: 'Mujer', checked: false },
    { value: 'transexual', label: 'Transexual', checked: false }
  ];

  servesToOptions = [
    { value: 'men', label: 'Hombres', checked: false },
    { value: 'women', label: 'Mujeres', checked: false },
    { value: 'disabled', label: 'Discapacitados', checked: false },
    { value: 'couples', label: 'Parejas', checked: false }
  ];
  allServesToSelected: boolean = true;

  isDropdownOpen: boolean = false;
  isServesToDropdownOpen: boolean = false;
  isNationalityDropdownOpen: boolean = false;
  isGenderDropdownOpen: boolean = false;
  isSortByDropdownOpen: boolean = false;

  sortByOptions = [
    { value: 'none', label: 'Sin ordenar' },
    { value: 'age', label: 'Edad' },
    { value: 'likes', label: 'Me gusta' }
  ];
  selectedSortBy: 'none' | 'age' | 'likes' = 'none';

  constructor() { }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    if (this.serviceFilterRef && !this.serviceFilterRef.nativeElement.contains(event.target)) {
      this.isDropdownOpen = false;
    }
    if (this.servesToFilterRef && !this.servesToFilterRef.nativeElement.contains(event.target)) {
      this.isServesToDropdownOpen = false;
    }
    if (this.nationalityFilterRef && !this.nationalityFilterRef.nativeElement.contains(event.target)) {
      this.isNationalityDropdownOpen = false;
    }
    if (this.genderFilterRef && !this.genderFilterRef.nativeElement.contains(event.target)) {
      this.isGenderDropdownOpen = false;
    }
    if (this.sortByFilterRef && !this.sortByFilterRef.nativeElement.contains(event.target)) {
      this.isSortByDropdownOpen = false;
    }
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleServesToDropdown(): void {
    this.isServesToDropdownOpen = !this.isServesToDropdownOpen;
  }

  toggleNationalityDropdown(): void {
    this.isNationalityDropdownOpen = !this.isNationalityDropdownOpen;
  }

  toggleGenderDropdown(): void {
    this.isGenderDropdownOpen = !this.isGenderDropdownOpen;
  }

  toggleSortByDropdown(): void {
    this.isSortByDropdownOpen = !this.isSortByDropdownOpen;
  }

  getSelectedServicesText(): string {
    if (this.selectedServiceIds.size === 0) {
      return 'Servicios';
    }
    const selectedNames = this.services
      .filter(s => this.selectedServiceIds.has(s.id))
      .map(s => s.name);

    if (selectedNames.length === 1) {
      return selectedNames[0];
    }
    return `${selectedNames.length} servicios`;
  }

  getSelectedServesToText(): string {
    if (this.allServesToSelected) {
      return 'Atiende a';
    }
    const selected = this.servesToOptions.filter(o => o.checked);
    if (selected.length === 0) {
      return 'Atiende a'; // Should not happen if logic is correct
    }
    if (selected.length === 1) {
      return `Atiende a: ${selected[0].label}`;
    }
    return `Atiende a: ${selected.length} seleccionados`;
  }

  getSelectedNationalityText(): string {
    const selected = this.nationalityOptions.filter(o => o.checked);
    if (selected.length === 0 || selected.length === 2) {
      return 'Nacionalidad';
    }
    return `Nacionalidad: ${selected[0].label}`;
  }

  getSelectedGenderText(): string {
    const selected = this.genderOptions.filter(o => o.checked);
    if (selected.length === 0) {
      return 'Género';
    }
    if (selected.length === 1) {
      return `Género: ${selected[0].label}`;
    }
    return `Género: ${selected.length} seleccionados`;
  }

  getSelectedSortByText(): string {
    if (this.selectedSortBy === 'none') {
      return 'Ordenar por';
    }
    const option = this.sortByOptions.find(o => o.value === this.selectedSortBy);
    return option ? option.label : 'Ordenar por';
  }

  toggleService(serviceId: string): void {
    if (this.selectedServiceIds.has(serviceId)) {
      this.selectedServiceIds.delete(serviceId);
    } else {
      this.selectedServiceIds.add(serviceId);
    }
    this.emitFilters();
  }

  isSelected(serviceId: string): boolean {
    return this.selectedServiceIds.has(serviceId);
  }



  onNationalityChange(value: string): void {
    const option = this.nationalityOptions.find(opt => opt.value === value);
    if (option) {
      option.checked = !option.checked;
    }
    this.emitFilters();
  }

  onGenderChange(value: string): void {
    const option = this.genderOptions.find(opt => opt.value === value);
    if (option) {
      option.checked = !option.checked;
    }
    this.emitFilters();
  }

  onServesToChange(value: string): void {
    if (value === 'all') {
      this.allServesToSelected = true;
      this.servesToOptions.forEach(opt => opt.checked = false);
    } else {
      this.allServesToSelected = false;
      const option = this.servesToOptions.find(opt => opt.value === value);
      if (option) {
        option.checked = !option.checked;
      }

      // If no specific options are checked, revert to 'all'
      if (!this.servesToOptions.some(opt => opt.checked)) {
        this.allServesToSelected = true;
      }
    }
    this.emitFilters();
  }

  onSortByChange(value: string): void {
    this.selectedSortBy = value as 'none' | 'age' | 'likes';
    this.isSortByDropdownOpen = false;
    this.emitFilters();
  }

  clearFilters(): void {
    this.selectedServiceIds.clear();
    this.nationality = 'all';
    this.nationalityOptions.forEach(opt => opt.checked = false);
    this.genderOptions.forEach(opt => opt.checked = false);
    this.allServesToSelected = true;
    this.servesToOptions.forEach(opt => opt.checked = false);
    this.selectedSortBy = 'none';
    this.emitFilters();
  }

  get activeFilterGroups(): { label: string, filters: { type: string, id: string, label: string }[] }[] {
    const groups: { label: string, filters: { type: string, id: string, label: string }[] }[] = [];

    // Services
    const serviceFilters: { type: string, id: string, label: string }[] = [];
    this.selectedServiceIds.forEach(id => {
      const service = this.services.find(s => s.id === id);
      if (service) {
        serviceFilters.push({ type: 'service', id: id, label: service.name });
      }
    });
    if (serviceFilters.length > 0) {
      groups.push({ label: 'Servicios', filters: serviceFilters });
    }

    // Nationality
    const nationalityFilters: { type: string, id: string, label: string }[] = [];
    this.nationalityOptions.filter(o => o.checked).forEach(o => {
      nationalityFilters.push({ type: 'nationality', id: o.value, label: o.label });
    });
    if (nationalityFilters.length > 0) {
      groups.push({ label: 'Nacionalidad', filters: nationalityFilters });
    }

    // Gender
    const genderFilters: { type: string, id: string, label: string }[] = [];
    this.genderOptions.filter(o => o.checked).forEach(o => {
      genderFilters.push({ type: 'gender', id: o.value, label: o.label });
    });
    if (genderFilters.length > 0) {
      groups.push({ label: 'Género', filters: genderFilters });
    }

    // Serves To
    const servesToFilters: { type: string, id: string, label: string }[] = [];
    if (!this.allServesToSelected) {
      this.servesToOptions.filter(o => o.checked).forEach(o => {
        servesToFilters.push({ type: 'servesTo', id: o.value, label: o.label });
      });
    }
    if (servesToFilters.length > 0) {
      groups.push({ label: 'Atención', filters: servesToFilters });
    }



    return groups;
  }

  removeFilter(filter: { type: string, id: string, label: string }): void {
    if (filter.type === 'service') {
      this.selectedServiceIds.delete(filter.id);
    } else if (filter.type === 'nationality') {
      const option = this.nationalityOptions.find(o => o.value === filter.id);
      if (option) option.checked = false;
    } else if (filter.type === 'gender') {
      const option = this.genderOptions.find(o => o.value === filter.id);
      if (option) option.checked = false;
    } else if (filter.type === 'servesTo') {
      const option = this.servesToOptions.find(o => o.value === filter.id);
      if (option) option.checked = false;

      // If no specific options are checked, revert to 'all'
      if (!this.servesToOptions.some(opt => opt.checked)) {
        this.allServesToSelected = true;
      }
    } else if (filter.type === 'sortBy') {
      this.selectedSortBy = 'none';
    }
    this.emitFilters();
  }

  private emitFilters(): void {
    let selectedServesTo: string[] = [];
    if (!this.allServesToSelected) {
      selectedServesTo = this.servesToOptions
        .filter(opt => opt.checked)
        .map(opt => opt.value);
    }

    // Determine nationality based on checkboxes
    const nationalChecked = this.nationalityOptions.find(o => o.value === 'national')?.checked;
    const foreignChecked = this.nationalityOptions.find(o => o.value === 'foreign')?.checked;

    let nationality: 'all' | 'national' | 'foreign' = 'all';
    if (nationalChecked && !foreignChecked) {
      nationality = 'national';
    } else if (!nationalChecked && foreignChecked) {
      nationality = 'foreign';
    }
    // If both checked or neither checked, it remains 'all'

    // Get selected genders
    const selectedGenders = this.genderOptions
      .filter(opt => opt.checked)
      .map(opt => opt.value);

    this.filterChange.emit({
      serviceIds: Array.from(this.selectedServiceIds),
      nationality: nationality,
      servesTo: selectedServesTo,
      gender: selectedGenders,
      sortBy: this.selectedSortBy
    });
  }
}
