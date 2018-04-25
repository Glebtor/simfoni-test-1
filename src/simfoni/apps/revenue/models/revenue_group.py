from django.core.validators import MinValueValidator
from django.db import models
from django.utils.translation import ugettext_lazy as _

from core.models import AbstractBaseModel


class RevenueGroup(AbstractBaseModel):
    name = models.CharField(_('Name'), max_length=255, unique=True)
    revenue_from = models.DecimalField(_('From'), max_digits=14, decimal_places=2, validators=[MinValueValidator(0)])
    revenue_to = models.DecimalField(_('To'), max_digits=14, decimal_places=2, validators=[MinValueValidator(0)])
